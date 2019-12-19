## Compare load scores between websites

 Returns json data about response score provided by lighthouse on load times for each website. 

You can enter a maximum of 3 websites.

    URL:

    </webinfo/:website1?/:website2?/:website3?>

    Example:
    
    /webinfo/www.google.com/www.facebook.com/www.youtube.com

Will not accept url that starts with https://

    Wont accept: https://www.google.com

    Will accept: www.google.com

Method: GET 

If no specefic url is given, it will load the scores for default url that is set. 

    Default Response:
    /webinfo

        Code: 200
        Content:
        [
            {
                "title": "Speed Index",
                "response_code": 200,
                "speed_score": 1,
                "url": "https://www.google.co.uk/"
            },
            {
                "title": "Speed Index",
                "response_code": 200,
                "speed_score": 0.96,
                "url": "https://www.hotel-internet-marketing.com/"
            },
            {
                "title": "Speed Index",
                "response_code": 200,
                "speed_score": 0.63,
                "url": "https://www.bbc.co.uk/"
            }
        ]


    Success Response:
    /webinfo/www.google.com

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
    /webinfo/www.unkownsite7878.com
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

