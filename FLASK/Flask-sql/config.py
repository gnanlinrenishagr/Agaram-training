class Config:
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:@127.0.0.1:3307/userdetails'
    SQLALCHEMY_TRACK_MODIFICATIONS = False