# Compare load scores between websites

 ## Returns json data on performace score based on the load times of each website. The score is collected by Lighthouse.

API is currently hosted on Heroku: https://webhouse.herokuapp.com/webinfo/

You can enter a maximum of 3 websites.

    URL:

    https://webhouse.herokuapp.com/

    Parameters:

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

        [
            {
                "message": "Url not found",
                "response_code": 500
            }
        ]

    Sample Call:

    Heroku:
    curl https://webhouse.herokuapp.com/webinfo/www.google.com/www.facebook.com/www.youtube.com

