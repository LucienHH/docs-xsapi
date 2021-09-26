# GET /users/me

{% api-method method="get" host="https://userpresence.xboxlive.com" path="/users/me" %}{% api-method-description %}
Obtain the current user's 
{% endapi-method-description %}
{% api-method-summary %}
/users/me
{% endapi-method-summary %}
{% api-method-spec %}
{% api-method-request %}

{% api-method-query-parameters %}
{% api-method-parameter name="level" type="string" required=false %}
Optional. 
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Authentication credentials for HTTP authentication. Example value: "XBL3.0 x=
{% endapi-method-parameter %}
{% api-method-parameter name="x-xbl-contract-version" type="string" required=true %}
Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, and so on. Example values: 3, vnext.
{% endapi-method-parameter %}
{% api-method-parameter name="Accept" type="string" required=true %}
Content-Types that are acceptable. The only one supported by Presence is application/json, but it must be specified in the header.
{% endapi-method-parameter %}
{% api-method-parameter name="Accept-Language" type="string" required=true %}
Acceptable locale for strings in the response. Example values: en-US.
{% endapi-method-parameter %}
{% api-method-parameter name="Host" type="string" required=true %}
Domain name of the server. Example value: presencebeta.xboxlive.com.
{% endapi-method-parameter %}
{% api-method-parameter name="X-RequestedServiceVersion" type="string" required=true %}
Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, and so on. Default value: 1.
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}
{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
  xuid:"0123456789",
  state:"online",
  devices:
  [{
    type:"D",
    titles:
    [{
      id:"12341234",
      name:"Contoso 5",
      state:"active",
      placement:"fill",
      timestamp:"2012-09-17T07:15:23.4930000",
      activity:
      {
        richPresence:"Team Deathmatch on Nirvana"
      }
    },
    {
      id:"12341235",
      name:"Contoso Waypoint",
      timestamp:"2012-09-17T07:15:23.4930000",
      placement:"snapped",
      state:"active",
      activity:
      {
        richPresence:"Using radar"
      }
    }]
  },
  {
    type:W8,
    titles:
    [{
      id:"23452345",
      name:"Contoso Gamehelp",
      state:"active",
      placement:"full",
      timestamp:"2012-09-17T07:15:23.4930000",
      activity:
      {
        richPresence:"Nirvana page",
      }
    }]
  }]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}
