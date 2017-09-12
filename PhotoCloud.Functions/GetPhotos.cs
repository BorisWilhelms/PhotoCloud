using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using PhotoCloud.Functions.Data;
using System.Linq;
using System.Net;
using System.Net.Http;

namespace PhotoCloud.Functions
{
    public static class GetPhotos
    {
        [FunctionName("GetPhotos")]
        public static HttpResponseMessage Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get")]HttpRequestMessage req,
            [Table("Photos", Connection = "photo-table-connection")]IQueryable<Photo> photos)
        {
            return req.CreateResponse(HttpStatusCode.OK, photos.ToList());
        }
    }
}
