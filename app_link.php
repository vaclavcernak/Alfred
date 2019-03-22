<?php
$iPod = stripos($_SERVER['HTTP_USER_AGENT'],"iPod");
$iPhone = stripos($_SERVER['HTTP_USER_AGENT'],"iPhone");
$iPad = stripos($_SERVER['HTTP_USER_AGENT'],"iPad");
$Android= stripos($_SERVER['HTTP_USER_AGENT'],"Android");

//check if user is using ipod, iphone or ipad...
if( $iPod || $iPhone || $iPad ){
    //we send these people to Apple Store
    header('Location: https://itunes.apple.com/us/app/my-alfred/id1447093962'); // <-apple store link here
}else if($Android){
    //we send these people to Android Store
    header('Location: https://play.google.com/store/apps/details?id=cz.previo.alfred'); // <-android store link here
}

?>