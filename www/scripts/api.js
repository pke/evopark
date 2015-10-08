(function () {
    "use strict";

    var baseUrl = "https://staging.evopark.de:443/api";

    var _httpClient = null;
    function getHttpClientAsync() {
        if (_httpClient) {
            return _httpClient;
        }
        return WinJS.Promise.as({
          headers: {
            "User-Agent": "evopark/0.1.0 (Windows Phone/10.0.1.0)",
            "Accept": "application/json",
            "X-API-Key": "swaggerdoc_Iey6phie",
            "Authorization": "Basic: cGhpbGs6Z0NVMVJBNktvQQ=="
          }
        });
        var httpClient = new Windows.Web.Http.HttpClient();
        var headers = httpClient.defaultRequestHeaders;
        headers.userAgent.tryParseAdd("evopark/0.1.0 (Windows Phone/10.0.1.0)");
        headers.append("x-api-key", "swaggerdoc_Iey6phie");
        headers.authorization = new Windows.Web.Http.Headers.HttpCredentialsHeaderValue("Basic", "cGhpbGs6Z0NVMVJBNktvQQ==");
        headers.accept.tryParseAdd("application/json");
        return _httpClient = WinJS.Promise.as(httpClient);
    }

    function getJsonAsync(path) {
        return getHttpClientAsync().then(function(httpClient) {
          var uri = /*new Windows.Foundation.Uri*/(baseUrl + path + ".json");
          httpClient.url = uri;
          httpClient.responseType = "json";
          return WinJS.xhr(httpClient);
            //return httpClient.getBufferAsync(uri);
        }).then(function(request) {
          //var result = Windows.Security.Cryptography.CryptographicBuffer.convertBinaryToString(Windows.Security.Cryptography.BinaryStringEncoding.utf8, response);
          if (typeof request.response === "string") {
            return JSON.parse(request.response);
          } else {
            return request.response;
          }
        }, function(error) {
            console.error(error);
            return WinJS.Promise.wrapError(error);
        });
    }

    function getGaragesAsync() {
        return getJsonAsync("/garages");
    }

    function getActivitiesAsync(from, to) {
        return getJsonAsync("/user/account/items");
    }

    function getRetailersNearParkingGarageAsync(garageId) {
        return getJsonAsync("/retail_stores/near_garage/" + garageId)
        .then(function (dealers) {
            return WinJS.Promise.join(dealers.map(function (dealer) {
                return getJsonAsync("/retail_stores/" + dealer.id);
            }));
        })
    }

    WinJS.Namespace.define("evopark.api", {
        getGaragesAsync: getGaragesAsync,
        getActivitiesAsync: getActivitiesAsync,
        getRetailersNearParkingGarageAsync: getRetailersNearParkingGarageAsync
    });
})();
