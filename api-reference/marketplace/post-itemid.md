# POST {itemID}

{% api-method method="post" host="https://eds.xboxlive.com" path="{itemID}" %}
{% api-method-summary %}
{itemID}
{% endapi-method-summary %}

{% api-method-description %}
Indicates that all or a portion of a consumable inventory item has been used and decrements the quantity of the consumable by the requested amount. The domain for these URIs is
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="itemID" type="string" required=true %}
the ID unique to each user for a singular inventory item
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
  "transactionId": String
  "url": String
  "newQuantity": Int
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

```text
# Sample Request

{
  "transactionId": String
  "removeQuantity": Int
}
```

