declare global {
  interface Window {
    cloudinary: any
  }
}

export const openUploadModal = (
  onSuccess: (data: any, fieldName: string) => void,
  fieldName: string
) => {
  window.cloudinary
    .openUploadWidget(
      {
        cloud_name: process.env.CLOUD_NAME,
        upload_preset: process.env.UPLOAD_PRESET,
      },
      (error: any, result: any) => {
        if (!error && result && result.event === 'success') {
          onSuccess(result.info, fieldName)
        }
      }
    )
    .open()
}
