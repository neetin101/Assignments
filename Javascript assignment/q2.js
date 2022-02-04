const ObjectCreator = function(details){
    this._version = details.version;
    this._channel = details.channel;
    this._keyField = details.keyField;    
}


ObjectCreator.prototype.getChannel = function () {
    return this._channel;
};

ObjectCreator.prototype.getVersion = function () {
    return this._version;
};

ObjectCreator.prototype.getKeyField = function() {
    return this._keyField;
};

ObjectCreator.prototype.setChannel = function(channel) {
    this._channel = channel;
};

ObjectCreator.prototype.setVersion = function(version) {
    this._version = version;
};

ObjectCreator.prototype.setKeyField = function(keyField) {
    this._keyField = keyField;
};

details = {
    version: '7.8.2',
    channel: 95.1,
    keyField: 'KEYFIELDS'
}

const MetadataParser = new ObjectCreator(details);