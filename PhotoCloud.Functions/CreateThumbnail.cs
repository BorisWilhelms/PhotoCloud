using System;
using System.Collections.Generic;
using System.IO;
using ImageResizer;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;

namespace PhotoCloud.Functions
{
    public static class CreateThumbnail
    {
        [FunctionName("CreateThumbnail")]
        public static void Run(
            [BlobTrigger("images/{name}", Connection = "image-blob-connection")]Stream image,
            [Blob("images-sm/{name}", FileAccess.Write, Connection = "image-blob-connection")]Stream imageSmall,
            [Blob("images-md/{name}", FileAccess.Write, Connection = "image-blob-connection")]Stream imageMedium)  // output blobs
        {
            var imageBuilder = ImageBuilder.Current;
            var size = imageDimensionsTable[ImageSize.Small];

            imageBuilder.Build(
                image, imageSmall,
                new ResizeSettings(size.Item1, size.Item2, FitMode.Max, null), false);

            image.Position = 0;
            size = imageDimensionsTable[ImageSize.Medium];

            imageBuilder.Build(
                image, imageMedium,
                new ResizeSettings(size.Item1, size.Item2, FitMode.Max, null), false);
        }

        public enum ImageSize
        {
            ExtraSmall, Small, Medium
        }

        private static Dictionary<ImageSize, Tuple<int, int>> imageDimensionsTable = new Dictionary<ImageSize, Tuple<int, int>>()
        {
            { ImageSize.Small,      Tuple.Create(268, 200) },
            { ImageSize.Medium,     Tuple.Create(536, 400) }
        };
    }
}
