# GET Profile for a user or users

{% api-method method="get" host="https://profile.xboxlive.com" path="/users/:userId/profile/settings" %}
{% api-method-summary %}
Get Profile
{% endapi-method-summary %}

{% api-method-description %}
Gets a user or users profile
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="userId" type="string" required=true %}
Can be either 'xuid\(12345\)', 'gt\(myGamertag\)', or 'me'.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="settings" type="string" required=true %}
A comma-delimited list of setting names.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Cake successfully retrieved.
{% endapi-method-response-example-description %}

```
{    "name": "Cake's name",    "recipe": "Cake's recipe name",    "cake": "Binary cake"}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

```text
# Available setting

[
    'GameDisplayPicRaw',
    'Gamerscore',
    'Gamertag',
    'AccountTier',
    'XboxOneRep',
    'PreferredColor',
    'RealName',
    'Bio',
    'Location',
    'ModernGamertag',
    'ModernGamertagSuffix',
    'UniqueModernGamertag',
    'RealNameOverride',
    'TenureLevel',
    'Watermarks',
    'IsQuarantined',
    'DisplayedLinkedAccounts',
]
```



