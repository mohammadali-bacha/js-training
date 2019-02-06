var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cons = require('consolidate'),
    dust = require('dustjs-helpers'),
    pg = require('pg'),
    
    app = express();

const connect = 'postgresql://bachamohammad-ali:@database.server.com:3211/mydb'
