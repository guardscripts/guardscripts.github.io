const _0x2c91c7=_0x1b3a;(function(_0x9c8656,_0x1aaaf8){const _0x221344=_0x1b3a,_0xe801b=_0x9c8656();while(!![]){try{const _0x5d17bb=parseInt(_0x221344(0x157))/0x1+-parseInt(_0x221344(0x176))/0x2+parseInt(_0x221344(0x170))/0x3+parseInt(_0x221344(0x199))/0x4+parseInt(_0x221344(0x1a0))/0x5+-parseInt(_0x221344(0x192))/0x6+-parseInt(_0x221344(0x1c5))/0x7*(parseInt(_0x221344(0x162))/0x8);if(_0x5d17bb===_0x1aaaf8)break;else _0xe801b['push'](_0xe801b['shift']());}catch(_0x556cfe){_0xe801b['push'](_0xe801b['shift']());}}}(_0x40b8,0x2be99));const firebaseConfig={'apiKey':_0x2c91c7(0x164),'authDomain':'chat-app-8ecc0.firebaseapp.com','projectId':_0x2c91c7(0x16b),'storageBucket':_0x2c91c7(0x1da),'messagingSenderId':_0x2c91c7(0x188),'appId':_0x2c91c7(0x1bc)},app=firebase[_0x2c91c7(0x181)](firebaseConfig),analytics=firebase[_0x2c91c7(0x1c7)](app),_db=firebase[_0x2c91c7(0x1de)]();String[_0x2c91c7(0x160)][_0x2c91c7(0x1c1)]=function(_0xbcd4a5){const _0x55db6d=_0x2c91c7;return this[_0x55db6d(0x174)]((_0x3d878c,_0x386068)=>{return{'i':_0x386068,'iv':_0x3d878c===_0xbcd4a5};})[_0x55db6d(0x167)](_0x267fd2=>_0x267fd2['iv'])[_0x55db6d(0x174)](_0x5e86d8=>_0x5e86d8['i']);};let usernames=[],users=[],cusers=[];const fetchUsers=_db['ref'](_0x2c91c7(0x15a));fetchUsers['on'](_0x2c91c7(0x193),function(_0x379915){const _0x191c76=_0x2c91c7;usernames[_0x191c76(0x1d6)](_0x379915[_0x191c76(0x17c)]()[_0x191c76(0x163)][_0x191c76(0x1b9)]()),users[_0x191c76(0x1d6)]('@'+_0x379915[_0x191c76(0x17c)]()[_0x191c76(0x163)]),cusers['push'](_0x191c76(0x1b3)+_0x379915['val']()[_0x191c76(0x163)]+_0x191c76(0x169));if(window[_0x191c76(0x161)]<=0x12c)document['querySelector'](_0x191c76(0x17d))['textContent']=_0x191c76(0x1f0)+usernames[_0x191c76(0x1e8)];}),fetchUsers['on'](_0x2c91c7(0x1ab),function(_0x8b3d2e){const _0xac85a2=_0x2c91c7;usernames['deleteItem'](_0x8b3d2e[_0xac85a2(0x17c)]()['username']['toLowerCase']()),users['deleteItem']('@'+_0x8b3d2e[_0xac85a2(0x17c)]()[_0xac85a2(0x163)]),cusers[_0xac85a2(0x166)](_0xac85a2(0x1b3)+_0x8b3d2e[_0xac85a2(0x17c)]()[_0xac85a2(0x163)]+_0xac85a2(0x169));if(window['innerWidth']<=0x12c)document['querySelector'](_0xac85a2(0x17d))[_0xac85a2(0x1c4)]=_0xac85a2(0x1f0)+usernames[_0xac85a2(0x1e8)];});function isEmpty(_0x2f583c){return!_0x2f583c||_0x2f583c['length']===0x0;}class User{constructor(_0x3de264){const _0x491fdb=_0x2c91c7;this[_0x491fdb(0x163)]=_0x3de264;}['meetsConstraints'](){const _0x4d993c=_0x2c91c7;return this[_0x4d993c(0x163)][_0x4d993c(0x1e8)]<=0x19&&this[_0x4d993c(0x163)][_0x4d993c(0x1e8)]>=0x1&&!usernames[_0x4d993c(0x1f5)](this[_0x4d993c(0x163)])&&!this[_0x4d993c(0x163)][_0x4d993c(0x1b9)]()[_0x4d993c(0x1f5)](atob(_0x4d993c(0x165)))&&!this[_0x4d993c(0x163)][_0x4d993c(0x1b9)]()[_0x4d993c(0x1f5)](_0x4d993c(0x19e))||this[_0x4d993c(0x163)]==_0x4d993c(0x1bf);}[_0x2c91c7(0x175)](_0x20627c){const _0x4db3fc=_0x2c91c7;usernames[_0x4db3fc(0x166)](this[_0x4db3fc(0x163)]),this[_0x4db3fc(0x163)]=_0x20627c,usernames['push'](_0x20627c),users=usernames['map'](_0x2d524e=>'@'+_0x2d524e),cusers=users[_0x4db3fc(0x174)](_0x4f340f=>_0x4db3fc(0x1d7)+_0x4f340f+_0x4db3fc(0x169));}get[_0x2c91c7(0x18c)](){const _0x36efdb=_0x2c91c7;return this[_0x36efdb(0x163)];}get[_0x2c91c7(0x16e)](){const _0x46720e=_0x2c91c7,_0xc0eecc=[_0x46720e(0x17f),_0x46720e(0x17e)];if(!this['meetsConstraints']()){if(this[_0x46720e(0x163)][_0x46720e(0x1e8)]>0x19)return _0xc0eecc[0x0];else{if(this['username']['length']<0x1)return _0xc0eecc[0x1];else{if(usernames[_0x46720e(0x1f5)](this['username'])||this['username']['toLowerCase']()['includes'](atob('bmlnZ2Vy')))return _0xc0eecc[0x1];else{if(this[_0x46720e(0x163)][_0x46720e(0x17a)](_0x46720e(0x19e))&&this[_0x46720e(0x163)]!==_0x46720e(0x1bf))return _0xc0eecc[0x1];}}}}else return _0x46720e(0x168);}}function _0x1b3a(_0x434b3f,_0x3a015f){const _0x40b8ef=_0x40b8();return _0x1b3a=function(_0x1b3ab5,_0x269306){_0x1b3ab5=_0x1b3ab5-0x156;let _0x2f4b41=_0x40b8ef[_0x1b3ab5];return _0x2f4b41;},_0x1b3a(_0x434b3f,_0x3a015f);}function _0x40b8(){const _0x401035=['substring','css','errorMsg','Error:\x20','571230Zshgic','format','#772ce8','https://','map','changeUsername','658586aKvfWj','stitle','administrator','trim','match','dblclick','val','.activeusers','Invalid\x20Username','That\x20username\x20is\x20too\x20long!\x20max\x20is\x2025\x20chars','\x22\x20data-stitle=\x22','initializeApp','btn','data-time','</span></li><br/>','body','70%','style','684945855969','second','linear-gradient(-45deg,\x20rgba(255,0,0,1)\x200%,\x20rgba(255,154,0,1)\x2010%,\x20rgba(208,222,33,1)\x2020%,\x20rgba(79,220,74,1)\x2030%,\x20rgba(63,218,216,1)\x2040%,\x20rgba(47,201,226,1)\x2050%,\x20rgba(28,127,238,1)\x2060%,\x20rgba(95,21,242,1)\x2070%,\x20rgba(186,12,248,1)\x2080%,\x20rgba(251,7,217,1)\x2090%,\x20rgba(255,0,0,1)\x20100%);','</span><span\x20id=\x22msg\x22>','name','#chat','.lgo','\x27\x20data-simg=\x22','/pm','#messages','1102980ORTKKa','child_added','mentions','block','receive','#message-form','dataset','1426940XgDZAj','set','time','#user-form','281px','admin','Nobody\x20to\x20reply\x20to!','571670vXQmuS','getElementsByClassName','remove','submit','search','Message\x20too\x20long!','replaceArray','Your\x20username:\x20','parse','info','<em>from</em>\x20@','child_removed','!important\x22\x20data-time=\x27','.adm','sid','auto','#messages\x20>\x20li','<li\x20title=\x22','addEventListener','<span\x20id=\x27mcolor\x27>@','startsWith','classList','random','indexOf','Sent\x20PM\x20to\x20','toLowerCase','beforeunload','true','1:684945855969:web:fe7858b3dffc7981ca2ea0','replace','Recieved\x20PM\x20from\x20','administrator01','25px','indexsOf','</a>','><span\x20id=\x22user\x22>','textContent','331681QHwXKH','abs','analytics','stringify','button','innerHTML','preventDefault','#message-input','-100px','View','meetsConstraints','toString','key','charCodeAt','substr','!important\x22>@','http://','push','<span\x20id=\x27mcolor\x27>','#msg','DELETE\x20@A','chat-app-8ecc0.appspot.com','floor','querySelector','\x22\x20style=\x22background:','database','getAttribute','simg','listener','<a\x20id=\x27clink\x27\x20target=\x27_blank\x27\x20href=\x27','deleteallmsgs','appendChild','sent','onclick','hostname','length','messages/','now','get','isArray','pms/','#user','none','Active\x20Users:\x20','#user-input','ref','#message-btn','getItem','includes','Enter\x20A\x20Valid\x20Message!','confirm','add','message','undefined','Delete\x20this\x20message?','<a\x20class=\x27admin\x27\x20href=\x27https://github.com/','268424JUIjex','RelativeTimeFormat','previousElementSibling','users/','error','\x27\x20class=','marginTop','scrollIntoView','\x27>@admin</a>','prototype','innerWidth','40izzCLs','username','AIzaSyAfwqFGvE5Hds3T8Hu8gUawO8-esZPtvFg','bmlnZ2Vy','deleteItem','filter','No\x20Error\x20Thrown!','</span>','\x22\x20class=\x22message\x20','chat-app-8ecc0'];_0x40b8=function(){return _0x401035;};return _0x40b8();}let username=new User('Guest'),lastPmTo;elem(_0x2c91c7(0x197))[_0x2c91c7(0x1a3)](sendMessage);const transparency='30';var stringtocolor=function(_0x479c35){const _0x57dcc8=_0x2c91c7;var _0xe7b94c=0x0;for(var _0x27f65b=0x0;_0x27f65b<_0x479c35['length'];_0x27f65b++){_0xe7b94c=_0x479c35[_0x57dcc8(0x1d2)](_0x27f65b)+((_0xe7b94c<<0x5)-_0xe7b94c);}var _0x1cd41d='#';for(var _0x27f65b=0x0;_0x27f65b<0x3;_0x27f65b++){var _0x4e1cfb=_0xe7b94c>>_0x27f65b*0x8&0xff;_0x1cd41d+=('00'+_0x4e1cfb[_0x57dcc8(0x1d0)](0x10))[_0x57dcc8(0x1d3)](-0x2);}return _0x479c35==='admin'?_0x57dcc8(0x18a):_0x1cd41d+transparency;};function sendMessage(_0xa06c52){const _0xaaea7a=_0x2c91c7;_0xa06c52[_0xaaea7a(0x1cb)]();const _0x5f4396=Date['now'](),_0x58a5f8=elem(_0xaaea7a(0x1cc)),_0x183a3e=_0x58a5f8['val']();if(_0x58a5f8[_0xaaea7a(0x1e8)]<0x64&&_0x58a5f8[_0xaaea7a(0x17c)]()[_0xaaea7a(0x179)]()!==''&&!_0x58a5f8['val']()[_0xaaea7a(0x1b9)]()[_0xaaea7a(0x1f5)](atob(_0xaaea7a(0x165)))){_0x58a5f8[_0xaaea7a(0x17c)]('');if(_0x183a3e[_0xaaea7a(0x1b4)](_0xaaea7a(0x190)))_db[_0xaaea7a(0x1f2)](_0xaaea7a(0x1ed)+_0x5f4396)['set']({'to':_0x183a3e[_0xaaea7a(0x16c)](_0x183a3e['indexsOf']('\x20')[0x0]+0x1,_0x183a3e[_0xaaea7a(0x1c1)]('\x20')[0x1]),'username':username[_0xaaea7a(0x18c)],'message':_0x183a3e['substring'](_0x183a3e[_0xaaea7a(0x1c1)]('\x20')[0x1]+0x1,_0x183a3e[_0xaaea7a(0x1e8)])});else{if(_0x183a3e['startsWith']('/r'))typeof lastPmTo!==_0xaaea7a(0x1fa)?_db[_0xaaea7a(0x1f2)](_0xaaea7a(0x1ed)+_0x5f4396)['set']({'to':lastPmTo,'username':username[_0xaaea7a(0x18c)],'message':_0x183a3e['substring'](_0x183a3e[_0xaaea7a(0x1c1)]('\x20')[0x0]+0x1,_0x183a3e[_0xaaea7a(0x1e8)])}):SnackBar({'message':_0xaaea7a(0x19f),'status':_0xaaea7a(0x15b),'position':'br','fixed':!![],'timeout':0x5dc});else{if(_0x183a3e[_0xaaea7a(0x1e8)]>0xc8)SnackBar({'message':_0xaaea7a(0x1a5),'status':_0xaaea7a(0x15b),'position':'br','fixed':!![],'timeout':0x5dc});else{let _0x546f0c;_0x546f0c=username['name']=='administrator01'?_0xaaea7a(0x19e):username[_0xaaea7a(0x18c)],qrst=_getquerystring(),_db[_0xaaea7a(0x1f2)](_0xaaea7a(0x1e9)+_0x5f4396)[_0xaaea7a(0x19a)]({'time':_0x5f4396,'username':_0x546f0c,'sid':qrst[_0xaaea7a(0x1ae)],'simg':qrst[_0xaaea7a(0x1e0)],'stitle':qrst[_0xaaea7a(0x177)],'message':_0x183a3e});}}}}else SnackBar({'message':_0xaaea7a(0x1f6),'status':_0xaaea7a(0x15b),'position':'br','fixed':!![],'timeout':0x5dc});}const fetchChat=_db[_0x2c91c7(0x1f2)]('messages/'),fetchPms=_db['ref'](_0x2c91c7(0x1ed));let tStamp=Date[_0x2c91c7(0x1ea)]();elem(_0x2c91c7(0x19c))[_0x2c91c7(0x1a3)](function(_0x521a05){const _0x17637d=_0x2c91c7;_0x521a05[_0x17637d(0x1cb)](),username=new User(elem(_0x17637d(0x1f1))[_0x17637d(0x17c)]()),username['name']===_0x17637d(0x1bf)?window[_0x17637d(0x178)]=!![]:window[_0x17637d(0x178)]=![],username[_0x17637d(0x1cf)]()?(elem(_0x17637d(0x19c))[_0x17637d(0x16d)]({'display':'none'}),elem('.chatabout')[_0x17637d(0x16d)]({'display':_0x17637d(0x1ef)}),window[_0x17637d(0x161)]<=0x12c&&(elem('h1')[_0x17637d(0x16d)]({'opacity':'0'}),elem('h1')[_0x17637d(0x16d)]({'marginTop':_0x17637d(0x1cd)}),document[_0x17637d(0x1dc)](_0x17637d(0x185))[_0x17637d(0x187)][_0x17637d(0x15d)]=_0x17637d(0x1c0),setTimeout(()=>{const _0x525740=_0x17637d;elem(_0x525740(0x1cc))[_0x525740(0x16d)]({'width':_0x525740(0x186)}),elem(_0x525740(0x1f3))['css']({'width':'30%'}),elem(_0x525740(0x1f3))[_0x525740(0x16d)]({'background':_0x525740(0x172)}),elem(_0x525740(0x197))[_0x525740(0x16d)]({'width':_0x525740(0x19d)}),elem(_0x525740(0x18e))['css']({'opacity':'1'}),elem('#message-form')[_0x525740(0x16d)]({'marginLeft':'-36px'}),!administrator&&(document[_0x525740(0x1dc)]('.currentuser')[_0x525740(0x1c4)]=_0x525740(0x1a7)+username['name']),document[_0x525740(0x1dc)](_0x525740(0x17d))[_0x525740(0x1c4)]=_0x525740(0x1f0)+usernames[_0x525740(0x1e8)];},0xc8)),_reloadql(),_db[_0x17637d(0x1f2)]('users/'+tStamp)[_0x17637d(0x19a)]({'username':username['name']}),window['color']=Math[_0x17637d(0x1db)](Math[_0x17637d(0x1b6)]()*0x164),elem(_0x17637d(0x18d))[_0x17637d(0x16d)]({'display':_0x17637d(0x195)}),pms(),Array[_0x17637d(0x1ec)](elem('#messages\x20>\x20li'))&&(elem('#messages\x20>\x20li')[elem('#messages\x20>\x20li')['length']-0x1][_0x17637d(0x16d)]({'backgroundColor':stringtocolor(elem(_0x17637d(0x1b0))[elem(_0x17637d(0x1b0))[_0x17637d(0x1e8)]-0x1][_0x17637d(0x1c4)])}),elem(_0x17637d(0x1b0))[elem(_0x17637d(0x1b0))[_0x17637d(0x1e8)]-0x1][_0x17637d(0x15e)]())):(elem(_0x17637d(0x1f1))[_0x17637d(0x17c)](''),SnackBar({'message':_0x17637d(0x16f)+username[_0x17637d(0x16e)],'status':_0x17637d(0x15b),'icon':'!','position':'br','fixed':!![],'timeout':0x7d0}));});function addPm(_0x2a38f6,_0x2a3985,_0x36f801,_0x2aae77,_0x5683f2){const _0x5449c6=_0x2c91c7,_0x2c3404=_0x36f801[_0x5449c6(0x17a)](/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)?_0x36f801[_0x5449c6(0x17a)](/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g):[],_0x35401a=_0x36f801[_0x5449c6(0x17a)](/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)?_0x36f801['match'](/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)[_0x5449c6(0x174)](_0x5d3f15=>_0x5449c6(0x1e2)+(_0x5d3f15[_0x5449c6(0x1b4)](_0x5449c6(0x1d5))||_0x5d3f15[_0x5449c6(0x1b4)](_0x5449c6(0x173))?_0x5d3f15:'https://'+_0x5d3f15)+'\x27>'+_0x5d3f15+_0x5449c6(0x1c2)):[],_0x203d9d='<li\x20data-time=\x27'+_0x2aae77+_0x5449c6(0x15c)+(username['name']===_0x2a3985?_0x5449c6(0x1e5):_0x5449c6(0x196))+_0x5449c6(0x1c3)+(_0x5683f2===0x1?'<em>to</em>\x20@'+_0x2a38f6:_0x5449c6(0x1aa)+_0x2a3985)+'</span><br/><span\x20id=\x22msg\x22>'+_0x36f801['replaceArray'](users,cusers)[_0x5449c6(0x1bd)](/@admin/gi,_0x5449c6(0x156)+location[_0x5449c6(0x1e7)][_0x5449c6(0x16c)](0x0,location[_0x5449c6(0x1e7)]['indexOf']('.'))+_0x5449c6(0x15f))[_0x5449c6(0x1a6)](_0x2c3404,_0x35401a)+_0x5449c6(0x184);elem('#messages')[_0x5449c6(0x1ca)]+=_0x203d9d,Array['isArray'](elem('#messages\x20>\x20li'))?elem(_0x5449c6(0x1b0))[elem(_0x5449c6(0x1b0))[_0x5449c6(0x1e8)]-0x1][_0x5449c6(0x15e)]():elem(_0x5449c6(0x1b0))['scrollIntoView']();}var units={'year':0x18*0x3c*0x3c*0x3e8*0x16d,'month':0x18*0x3c*0x3c*0x3e8*0x16d/0xc,'day':0x18*0x3c*0x3c*0x3e8,'hour':0x3c*0x3c*0x3e8,'minute':0x3c*0x3e8,'second':0x3e8},rtf=new Intl[(_0x2c91c7(0x158))]('en',{'numeric':_0x2c91c7(0x1af)}),getRelativeTime=(_0x28a43e,_0x31af95=new Date())=>{const _0xfdb887=_0x2c91c7;var _0xad3640=_0x28a43e-_0x31af95;for(var _0x2877ad in units)if(Math[_0xfdb887(0x1c6)](_0xad3640)>units[_0x2877ad]||_0x2877ad==_0xfdb887(0x189))return rtf[_0xfdb887(0x171)](Math['round'](_0xad3640/units[_0x2877ad]),_0x2877ad);};fetchChat['on'](_0x2c91c7(0x193),function(_0x469d0a){const _0x3b9c5e=_0x2c91c7,_0x3b8e88=_0x469d0a['val'](),_0x366057=_0x3b8e88[_0x3b9c5e(0x1f9)][_0x3b9c5e(0x17a)](/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)?_0x3b8e88[_0x3b9c5e(0x1f9)]['match'](/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g):[],_0x1d366f=_0x3b8e88['message'][_0x3b9c5e(0x17a)](/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)?_0x3b8e88['message'][_0x3b9c5e(0x17a)](/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)[_0x3b9c5e(0x174)](_0x36dd7f=>_0x3b9c5e(0x1e2)+(_0x36dd7f[_0x3b9c5e(0x1b4)]('http://')||_0x36dd7f[_0x3b9c5e(0x1b4)](_0x3b9c5e(0x173))?_0x36dd7f:'https://'+_0x36dd7f)+'\x27>'+_0x36dd7f+_0x3b9c5e(0x1c2)):[],_0x45eaa8=_0x3b9c5e(0x1b1)+getRelativeTime(_0x469d0a['key'])+_0x3b9c5e(0x1dd)+stringtocolor(_0x3b8e88[_0x3b9c5e(0x163)])+_0x3b9c5e(0x1ac)+_0x469d0a[_0x3b9c5e(0x1d1)]+_0x3b9c5e(0x18f)+_0x3b8e88['simg']+_0x3b9c5e(0x180)+_0x3b8e88[_0x3b9c5e(0x177)]+'\x22\x20data-sid=\x22'+_0x3b8e88[_0x3b9c5e(0x1ae)]+_0x3b9c5e(0x16a)+(username[_0x3b9c5e(0x18c)]===_0x3b8e88['username']?_0x3b9c5e(0x1e5):_0x3b9c5e(0x196))+'\x22><span\x20id=\x22user\x22\x20style=\x22color:'+stringtocolor(_0x3b8e88['username'])+_0x3b9c5e(0x1d4)+_0x3b8e88[_0x3b9c5e(0x163)]+_0x3b9c5e(0x18b)+_0x3b8e88[_0x3b9c5e(0x1f9)]['replaceArray'](users,cusers)['replace'](/@admin/gi,_0x3b9c5e(0x156)+location[_0x3b9c5e(0x1e7)][_0x3b9c5e(0x16c)](0x0,location['hostname'][_0x3b9c5e(0x1b7)]('.'))+_0x3b9c5e(0x15f))['replaceArray'](_0x366057,_0x1d366f)+'</span></li><br/>';elem(_0x3b9c5e(0x191))[_0x3b9c5e(0x1ca)]+=_0x45eaa8;Array[_0x3b9c5e(0x1ec)](elem(_0x3b9c5e(0x1b0)))?elem(_0x3b9c5e(0x1b0))[elem('#messages\x20>\x20li')[_0x3b9c5e(0x1e8)]-0x1][_0x3b9c5e(0x15e)]():elem('#messages\x20>\x20li')[_0x3b9c5e(0x15e)]();_reloadql();let _0x260a5d=localStorage[_0x3b9c5e(0x1f4)](_0x3b9c5e(0x194))!=null?JSON[_0x3b9c5e(0x1a8)](localStorage[_0x3b9c5e(0x1f4)](_0x3b9c5e(0x194))):[];_0x3b8e88['message'][_0x3b9c5e(0x1f5)]('@'+username[_0x3b9c5e(0x18c)])&&!_0x260a5d[_0x3b9c5e(0x1f5)](_0x3b8e88[_0x3b9c5e(0x1f9)])&&(SnackBar({'message':_0x3b8e88[_0x3b9c5e(0x163)]+'\x20mentioned\x20you!','status':_0x3b9c5e(0x1a9),'icon':'i','fixed':!![],'position':'br','timeout':0xdac,'actions':[{'text':_0x3b9c5e(0x1ce),'function':function(){const _0x3697c2=_0x3b9c5e;if(Array['isArray'](elem(_0x3697c2(0x1b0))))for(const _0x12def3 of elem('#messages\x20>\x20li')){_0x12def3[_0x3697c2(0x1df)](_0x3697c2(0x183))===_0x469d0a['key']&&_0x12def3['scrollIntoView']();}else{const _0x3ed76c=elem(_0x3697c2(0x1b0));_0x3ed76c[_0x3697c2(0x1df)](_0x3697c2(0x183))===_0x469d0a[_0x3697c2(0x1d1)]&&_0x3ed76c[_0x3697c2(0x15e)]();}}}]}),_0x260a5d[_0x3b9c5e(0x1d6)](_0x3b8e88[_0x3b9c5e(0x1f9)]),localStorage['setItem'](_0x3b9c5e(0x194),JSON[_0x3b9c5e(0x1c8)](_0x260a5d)));}),fetchChat['on']('child_removed',function(_0x5af5df){const _0x4e6b72=_0x2c91c7,_0x18a5b0=_0x5af5df[_0x4e6b72(0x17c)]();if(Array[_0x4e6b72(0x1ec)](elem(_0x4e6b72(0x1b0))))for(const _0x596e30 of elem(_0x4e6b72(0x1b0))){if(_0x596e30[_0x4e6b72(0x1df)](_0x4e6b72(0x183))===_0x5af5df[_0x4e6b72(0x1d1)]){if(_0x596e30[_0x4e6b72(0x159)])_0x596e30[_0x4e6b72(0x159)][_0x4e6b72(0x1a2)]();_0x596e30['remove']();}}else{const _0x4af906=elem('#messages\x20>\x20li');if(_0x4af906['getAttribute'](_0x4e6b72(0x183))===_0x5af5df['key']){if(_0x4af906[_0x4e6b72(0x159)])_0x4af906[_0x4e6b72(0x159)]['remove']();_0x4af906['remove']();}}}),fetchChat['on']('child_changed',function(_0xf0a0eb){const _0x532faa=_0x2c91c7,_0x318ab3=_0xf0a0eb[_0x532faa(0x17c)]();if(Array['isArray'](elem(_0x532faa(0x1b0))))for(const _0x512f11 of elem(_0x532faa(0x1b0))){_0x512f11[_0x532faa(0x1df)]('data-time')===_0xf0a0eb[_0x532faa(0x1d1)]&&(_0x512f11['previousElementSibling'][_0x532faa(0x1c4)]=_0x318ab3[_0x532faa(0x163)][0x0],_0x512f11[_0x532faa(0x1dc)](_0x532faa(0x1d8))[_0x532faa(0x1c4)]=_0x318ab3['message'],_0x512f11[_0x532faa(0x1dc)](_0x532faa(0x1ee))[_0x532faa(0x1c4)]='@'+_0x318ab3[_0x532faa(0x163)]);}else{const _0x130c12=elem(_0x532faa(0x1b0));_0x130c12[_0x532faa(0x1df)](_0x532faa(0x183))===_0xf0a0eb[_0x532faa(0x1d1)]&&(_0x130c12[_0x532faa(0x159)][_0x532faa(0x1c4)]=_0x318ab3[_0x532faa(0x163)][0x0],_0x130c12[_0x532faa(0x1dc)](_0x532faa(0x1d8))[_0x532faa(0x1c4)]=_0x318ab3[_0x532faa(0x1f9)],_0x130c12[_0x532faa(0x1dc)](_0x532faa(0x1ee))['textContent']='@'+_0x318ab3[_0x532faa(0x163)]);}});function pms(){const _0x1d9b90=_0x2c91c7;fetchPms['on'](_0x1d9b90(0x193),function(_0x1caac7){const _0x4930aa=_0x1d9b90,_0x49c304=_0x1caac7['val'](),_0x22e79c=_0x49c304['to'][_0x4930aa(0x1b4)]('@')?_0x49c304['to']['substring'](0x1,_0x49c304['to']['length']):_0x49c304['to'];if(_0x22e79c===username['name'])addPm(_0x22e79c,_0x49c304[_0x4930aa(0x163)],_0x49c304[_0x4930aa(0x1f9)],_0x1caac7['key'],0x2),lastPmTo=_0x22e79c,SnackBar({'message':_0x4930aa(0x1be)+messages[_0x4930aa(0x163)],'status':_0x4930aa(0x1a9),'icon':'i','fixed':!![],'position':'br','timeout':0xdac});else _0x49c304['username']===username[_0x4930aa(0x18c)]&&(addPm(_0x22e79c,username[_0x4930aa(0x18c)],_0x49c304[_0x4930aa(0x1f9)],_0x1caac7[_0x4930aa(0x1d1)],0x1),lastPmTo=_0x22e79c,SnackBar({'message':_0x4930aa(0x1b8)+_0x22e79c,'status':_0x4930aa(0x1a9),'icon':'i','fixed':!![],'position':'br','timeout':0xdac}));});}function _deletemsg(_0xe24e8f){const _0x51fba6=_0x2c91c7;window[_0x51fba6(0x1f7)]('Are\x20you\x20sure?')&&_db[_0x51fba6(0x1f2)](_0x51fba6(0x1e9)+_0xe24e8f)['remove']();}function _reloadql(){const _0x2758ef=_0x2c91c7;if(typeof administrator!==_0x2758ef(0x1fa)&&administrator==!![]){if(!document[_0x2758ef(0x1dc)]('#deleteallmsgs')){const _0x3b315a=document['querySelector'](_0x2758ef(0x1ad)),_0x56a76a=document['createElement'](_0x2758ef(0x1c9));_0x56a76a['id']=_0x2758ef(0x1e3),_0x3b315a[_0x2758ef(0x1e4)](_0x56a76a),_0x56a76a[_0x2758ef(0x1b5)][_0x2758ef(0x1f8)](_0x2758ef(0x182)),_0x56a76a['textContent']=_0x2758ef(0x1d9),_0x56a76a[_0x2758ef(0x1e6)]=()=>{const _0x2931a7=_0x2758ef;window[_0x2931a7(0x1f7)](_0x2931a7(0x1fb))&&_db[_0x2931a7(0x1f2)]('messages/')[_0x2931a7(0x1a2)]();};}var _0x589af6=document[_0x2758ef(0x1a1)](_0x2758ef(0x1f9));for(i=0x0;i<_0x589af6['length'];i++){_0x589af6[i][_0x2758ef(0x1df)](_0x2758ef(0x1e1))!==_0x2758ef(0x1bb)&&_0x589af6[i][_0x2758ef(0x1b2)](_0x2758ef(0x17b),function(){const _0x55313e=_0x2758ef;var _0xcfac8a=this[_0x55313e(0x198)][_0x55313e(0x19b)];_deletemsg(_0xcfac8a);});}}};function _getquerystring(){const _0x2c29f4=_0x2c91c7;try{const _0x473ca9=window['location'][_0x2c29f4(0x1a4)],_0x5d0270=new URLSearchParams(_0x473ca9),_0x4d9bd8=_0x5d0270[_0x2c29f4(0x1eb)](_0x2c29f4(0x1e0)),_0x49cecb=_0x5d0270['get'](_0x2c29f4(0x177)),_0x1bebbc=_0x5d0270[_0x2c29f4(0x1eb)]('sid');return{'simg':_0x4d9bd8,'stitle':_0x49cecb,'sid':_0x1bebbc};}catch(_0x4854eb){console[_0x2c29f4(0x15b)](_0x4854eb);}}window[_0x2c91c7(0x1b2)](_0x2c91c7(0x1ba),function(_0x5ed33b){const _0x54cf74=_0x2c91c7;_0x5ed33b[_0x54cf74(0x1cb)](),_db[_0x54cf74(0x1f2)](_0x54cf74(0x15a)+tStamp)['remove']();});