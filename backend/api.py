from flask import Flask

api = Flask(__name__)

@api.route("/create_file")
def create_file():
    return {
        "create": "file"
    }

if __name__ == "__main__":
    api.run()