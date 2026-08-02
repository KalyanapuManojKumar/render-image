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
      // cloudinary.uploader.upload_stream types are not reliable across
      // environments; cast to `any` to call `.end()` without TS errors.
      const uploader: any = cloudinary.uploader;

      const stream = uploader.upload_stream(
        {
          folder,
          resource_type: "image",
          format: "png",
        },
        (error: any, result: any) => {
          if (error || !result) {
            const message =
              error instanceof Error ? error.message : "Cloudinary upload failed";

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
      );

      stream.end(image);
    });
  }
}

export default new CloudinaryService();