<?php
$DSN = "mysql:host=localhost; dbname=kmusicdb";
$DB = new PDO( $DSN, 'root', '', array( PDO::ATTR_PERSISTENT => true ) );
$DB->query( 'set names utf8' );
$query = 'SELECT * FROM musicinfo';
$result = $DB->query( $query );
$result->setFetchMode( PDO::FETCH_ASSOC );
$musicInfo = $result->fetchAll();
$songName = array();
$songSrc = array();
$imgSrc = array();
$singer = array();
$song = array();
$type = array();
foreach ( $musicInfo as $key => $value ) {
    $songName[ $key ] = $value[ 'SONG' ] . '-' . $value[ 'SINGER' ];
    $songSrc[ $key ] = 'music/' . $songName[$key] . '.' . $value[ 'CLASS' ];
    $imgSrc[ $key ] = 'url(../KMusicPlus/img/' . $value[ 'SINGER' ] . '.jpg);';
    $singer[ $key ] = $value[ 'SINGER' ];
    $song[ $key ] = $value[ 'SONG' ];
    $type[ $key ] = $value[ 'TYPE' ];
}
?>