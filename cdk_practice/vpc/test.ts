

def lambda_handler(event, context):
    return {
        "statusCode":200
    }

if __name__ == "__main__":
    print(lambda_handler(None,None))