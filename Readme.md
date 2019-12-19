Compare load times between websites

Returns json data about response score provided by lighthouse on load times for each website. 

You can enter a maximum of 3 websites.

    Example:
    
    /webinfo/www.google.com/www.facebook.com/www.youtube.com

If no specefic url is given, it will test the default url set.

    Example:
    /webinfo


    URL

    </webinfo/:website1?/:website2?/:website3?>

    Method:

    <Get>

    GET 

    Success Response:

        Code: 200
        Content: 
        [
            {
            "title": "Speed Index",
            "response_code": 200,
            "speed_score": 1,
            "url": "https://www.google.co.uk/"
            }
        ]


    Error Response:
    
        Code: 500
        [
            {
                "message": "Url not found",
                "response_code": 500
            }
        ]

    Sample Call:


    Heroku:
    curl https://webhouse.herokuapp.com/webinfo/www.google.com/www.facebook.com/www.youtube.com

    localhost:
    curl http://localhost:xxxx/webinfo/www.google.com/www.facebook.com/www.youtube.com

