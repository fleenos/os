sendToTop(`eval>
    $('#Window_${WindowID} .WindowHeader').css('color', 'transparent')
    $('#Window_${WindowID} img').css('display', 'none')
    $('#Window_${WindowID} iframe').css('box-shadow', 'none')
    $('#Window_${WindowID} iframe').css('left', '7px')
    $('#Window_${WindowID} iframe').css('top', '20px')
    $('#Window_${WindowID} iframe').css('width', 'calc(100% - 14px)')
    $('#Window_${WindowID} iframe').css('height', 'calc(100% - 28px)')
    $('#Window_${WindowID} .IframeIgnoreLayer').css('left', '7px')
    $('#Window_${WindowID} .IframeIgnoreLayer').css('top', '20px')
    $('#Window_${WindowID} .IframeIgnoreLayer').css('width', 'calc(100% - 14px)')
    $('#Window_${WindowID} .IframeIgnoreLayer').css('height', 'calc(100% - 28px)')
`)

var FrameMaxID = 1