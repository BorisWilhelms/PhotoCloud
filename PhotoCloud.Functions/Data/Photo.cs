using Microsoft.WindowsAzure.Storage.Table;
namespace PhotoCloud.Functions.Data
{
    public class Photo: TableEntity
    {
        public string Name { get; set; }
    }
}
