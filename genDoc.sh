BASEDIR=$(dirname $0)
$BASEDIR/node_modules/docco/bin/docco $BASEDIR/*/*.js -o $BASEDIR/docs
