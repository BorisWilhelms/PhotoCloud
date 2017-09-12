using Microsoft.Azure.WebJobs;
using PhotoCloud.Functions.Data;
using System;
using System.IO;
using System.Threading.Tasks;

namespace PhotoCloud.Functions
{
    public static class SavePhoto
    {
        [FunctionName("SavePhoto")]
        public static async Task Run(
            //This parameter is needed, to get the name of the blob.
#pragma warning disable RCS1163 // Unused parameter.
            [BlobTrigger("images/{name}", Connection = "image-blob-connection")]Stream myBlob,
#pragma warning restore RCS1163 // Unused parameter.
            [Table("Photos", Connection = "photo-table-connection")]IAsyncCollector<Photo> photos,
            string name)
        {
            var photo = new Photo() { Name = name };
            photo.RowKey = Guid.NewGuid().ToString();
            photo.PartitionKey = photo.RowKey.Substring(0, 1);

            await photos.AddAsync(photo);
        }
    }
}
