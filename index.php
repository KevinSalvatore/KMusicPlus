<?php include "php/KMusic.php"?>
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Kevin's Music Player Plus</title>
    <link rel="stylesheet" href="css/animate.min.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/KMusicPlus.css">
    <script>
        //歌曲路径
        var songName = eval( '<?php echo json_encode($songName)?>' );
        var songSrc = eval( '<?php echo json_encode($songSrc)?>' );
        var imgSrc = eval( '<?php echo json_encode($imgSrc)?>' );
        var singer = eval( '<?php echo json_encode($singer)?>' );
        var song = eval( '<?php echo json_encode($song)?>' );
        var type = eval( '<?php echo json_encode($type)?>' );
        var MAX = songSrc.length - 1; //定义最大下标
        var pos = MAX;
    </script>
</head>

<body>
    <div id="KMusicPlayerPlus" class="animated fadeInRight">
        <div id="KMusicPlayer" class="KMainPart">
            <div id="KMPBg" class="KBg KPLook"></div>
            <div id="KMPlayer" class="KPLook KBasicLook">
                <div id="KOnAndOff" class="KMPPart fa fa-play-circle fa-4x"></div>
                <div id="KPreAndNext" class="KMPPart">
                    <div id="KPrevious" class="fa fa-chevron-circle-left fa-2x"></div>
                    <div id="KNext" class="fa fa-chevron-circle-right fa-2x"></div>
                </div>
                <div id="KMusicInfo" class="KMPPart">
                    <h3 id="KMName">Kevin's Music Player++</h3>
                    <div id="KsingerWithLButton">
                        <p id="KMSinger">-- Kevin Xu</p>
                        <span id="KListShowAndHide" class="fa fa-list"></span>
                    </div>
                </div>
            </div>
        </div>
        <div id="KMusicList" class="KMainPart">
            <div id="KMLBg" class="KBg KLLook"></div>
            <div id="KMList" class="KLLook KBasicLook">
                <?php 
                for($i = count($songName)-1; $i>=0; $i--){
                    echo('<div class="KMLItem" id="KMLItems'.$i.'"><div class="KMLIImg KMLIImg'.$i.'"></div><div class="KMLICaption"><p>'.$songName[$i].'&nbsp</p><i class=""></i></div></div>');
                    echo('<style>.KMLIImg'.$i.'{background-image: '.$imgSrc[$i].'}</style>');
                }
                ?>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="js/KMusicPlus.js"></script>
</body>

</html>