"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, X, ImageIcon } from "lucide-react"
import Image from "next/image"

interface PhotoUploadProps {
  locationName: string
  onPhotosChange?: (photos: File[]) => void
}

export default function PhotoUpload({ locationName, onPhotosChange }: PhotoUploadProps) {
  const [photos, setPhotos] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    const imageFiles = files.filter((file) => file.type.startsWith("image/"))

    if (imageFiles.length > 0) {
      const newPhotos = [...photos, ...imageFiles]
      setPhotos(newPhotos)

      // Create preview URLs
      const newPreviews = imageFiles.map((file) => URL.createObjectURL(file))
      setPreviews((prev) => [...prev, ...newPreviews])

      onPhotosChange?.(newPhotos)
    }
  }

  const removePhoto = (index: number) => {
    const newPhotos = photos.filter((_, i) => i !== index)
    const newPreviews = previews.filter((_, i) => i !== index)

    // Revoke the URL to prevent memory leaks
    URL.revokeObjectURL(previews[index])

    setPhotos(newPhotos)
    setPreviews(newPreviews)
    onPhotosChange?.(newPhotos)
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-brand-blue">Facility Photos</h3>
        <Button onClick={handleUploadClick} variant="outline" size="sm">
          <Upload className="h-4 w-4 mr-2" />
          Upload Photos
        </Button>
      </div>

      <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleFileSelect} className="hidden" />

      {previews.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {previews.map((preview, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-32 w-full">
                  <Image
                    src={preview || "/placeholder.svg"}
                    alt={`${locationName} facility photo ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <Button
                    onClick={() => removePhoto(index)}
                    size="sm"
                    variant="destructive"
                    className="absolute top-2 right-2 h-6 w-6 p-0"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-2 border-dashed border-gray-300 hover:border-brand-blue transition-colors">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <ImageIcon className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-500 text-center mb-4">No facility photos uploaded yet</p>
            <Button onClick={handleUploadClick} variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Upload First Photo
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
