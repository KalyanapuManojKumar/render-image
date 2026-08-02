import cloudinary from "../config/cloudinary.js";

class CloudinaryService {
  public async uploadImage(
    image: Buffer,
    folder = "news",
  ): Promise<{
    url: string;
    publicId: string;
  }> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder,
            resource_type: "image",
            format: "png",
          },
          (error, result) => {
            if (error || !result) {
              const message =
                error instanceof Error
                  ? error.message
                  : "Cloudinary upload failed";

              return reject(
                new Error(
                  `${message}. Check your Cloudinary credentials and ensure the account is configured correctly.`,
                ),
              );
            }

            resolve({
              url: result.secure_url,
              publicId: result.public_id,
            });
          },
        )
        .end(image);
    });
  }
}

export default new CloudinaryService();