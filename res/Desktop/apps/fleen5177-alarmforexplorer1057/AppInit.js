
var UserApp = [
'fleen5177-alarmforexplorer1057',
'Alarm for explorer_1057',
'ru-ru',
'rgb(101,101,101)',
'rgb(111,111,111)',
1,
'icon.png',
'1.1',
'800px',
'600px',
'calc(50vh - 300px)',
'calc(50vw - 400px)',
false,
true,
]

if (VERSION["build"] >= UserApp[5]) {
    userAppsData.push({'packageName': UserApp[0],'appName': UserApp[1],'locale': UserApp[2],'color': UserApp[3],'minVer': UserApp[5],})
    LOCALE_appsnames.push(UserApp[1])
    LOCALE_searchdata.push(['desktop:' + UserApp[0], 'standart', UserApp[3], '../../../../mods/apps/' + UserApp[0] + '/' + UserApp[6], UserApp[1]])
    tilesInfo['desktop:' + UserApp[0]] = [['standart'], LOCALE_appsnames.length - 1, UserApp[3], UserApp[4], UserApp[1], '../../../../mods/apps/' + UserApp[0] + '/' + UserApp[6]]
    eval(`Programs['${UserApp[0]}'] = (args) => {CreateWindow('../../../../mods/apps/' + '${UserApp[0]}' + '/index.html', {'width': '${UserApp[8]}','height': '${UserApp[9]}','top': '${UserApp[10]}','left': '${UserApp[11]}','onlyClose': ${UserApp[12]},'resizable': ${UserApp[13]},'args': args,'processname':'${UserApp[0]}'})}`)
}

UserApp = null