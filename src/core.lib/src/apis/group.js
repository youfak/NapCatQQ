const _0x4cf0ca=_0x5d56;(function(_0x45b392,_0x43e4dc){const _0x2f9368=_0x5d56,_0x5104b5=_0x45b392();while(!![]){try{const _0x3b5e28=-parseInt(_0x2f9368(0x135))/0x1*(-parseInt(_0x2f9368(0x130))/0x2)+parseInt(_0x2f9368(0x103))/0x3*(parseInt(_0x2f9368(0x10d))/0x4)+parseInt(_0x2f9368(0x110))/0x5*(-parseInt(_0x2f9368(0x141))/0x6)+-parseInt(_0x2f9368(0x138))/0x7*(-parseInt(_0x2f9368(0x13d))/0x8)+-parseInt(_0x2f9368(0x119))/0x9*(parseInt(_0x2f9368(0x137))/0xa)+-parseInt(_0x2f9368(0x11e))/0xb+parseInt(_0x2f9368(0x123))/0xc*(parseInt(_0x2f9368(0x117))/0xd);if(_0x3b5e28===_0x43e4dc)break;else _0x5104b5['push'](_0x5104b5['shift']());}catch(_0x552cae){_0x5104b5['push'](_0x5104b5['shift']());}}}(_0x4fe9,0x5291b));import{NTQQUserApi,napCatCore}from'@/core';import{GroupListener}from'@/core/index';import{uid2UinMap}from'@/core/data';import{logDebug}from'@/common/utils/log';import{randomUUID}from'crypto';const groupMemberTasks=new Map(),SingleScreenNotifiesTasks=new Map(),groupListener=new GroupListener();function _0x4fe9(){const _0x1863e2=['kickMember','getGroupMembers','xjdms','1662177BJoEYX','获取群系统消息列表超时','session','获取群列表完成','QDfxa','onGroupSingleScreenNotifies','modifyGroupName','getSingleScreenNotifies','getPSkey','operateSysNotify','4TuYnoz','createMemberListScene','handleGroupRequest','3067105eSIuRQ','result','banGroup','nWpsf','getGroupNotifies','sFwAr','onLoginSuccess','4783987hhvtnf','setGroupShutUp','2003013mHSBUi','groupCode','errMsg','modifyMemberRole','type','6709263AIqmRO','tuuVH','QPGyK','quitGroup','ocFAi','12nPCeSA','dnZwi','uploadGroupBulletinPic','set','forEach','cEBmW','errCode','setGroupTitle','getGroupService','groupMemberList_MainWindow','ORvQu','qun.qq.com','gTBna','18pcxKfm','publishGroupBulletin','获取群列表超时','uin','infos','64453ifvHok','获取群成员列表出错,','10JWLRKn','7uUbZUm','getGroupIgnoreNotifies','seq','QNNjb','delete','2255832mvelRm','setMemberCard','onGroupListUpdate','addListener','6aKrIJP','getNextMemberList','then'];_0x4fe9=function(){return _0x1863e2;};return _0x4fe9();}function _0x5d56(_0x75ac4a,_0xa3d961){const _0x4fe957=_0x4fe9();return _0x5d56=function(_0x5d562e,_0x5e7422){_0x5d562e=_0x5d562e-0x103;let _0x4b5189=_0x4fe957[_0x5d562e];return _0x4b5189;},_0x5d56(_0x75ac4a,_0xa3d961);}groupListener[_0x4cf0ca(0x108)]=(_0x8c9813,_0x5b566b,_0x41b662)=>{const _0x15b338=_0x4cf0ca,_0x1f6e4a={'ORvQu':function(_0x2d1f03,_0x3d418b,_0x1b7163,_0x4ceb80){return _0x2d1f03(_0x3d418b,_0x1b7163,_0x4ceb80);}};for(const [_0x1f7d71,_0x5d7858]of SingleScreenNotifiesTasks){_0x1f6e4a[_0x15b338(0x12d)](_0x5d7858,_0x8c9813,_0x5b566b,_0x41b662),groupMemberTasks[_0x15b338(0x13c)](_0x1f7d71);}},groupListener[_0x4cf0ca(0x13f)]=(_0x205d01,_0x1e246b)=>{const _0x13a486=_0x4cf0ca,_0x30f6d0={'dQwcQ':function(_0x3dc064,_0xcaf1ee,_0x3d8eda){return _0x3dc064(_0xcaf1ee,_0x3d8eda);}};for(const [_0x1c1b48,_0x2368d8]of groupMemberTasks){_0x30f6d0['dQwcQ'](_0x2368d8,_0x205d01,_0x1e246b),groupMemberTasks[_0x13a486(0x13c)](_0x1c1b48);}},setTimeout(()=>{const _0xda435c=_0x4cf0ca;napCatCore[_0xda435c(0x116)](()=>{const _0x32a8f6=_0xda435c;napCatCore[_0x32a8f6(0x140)](groupListener);});},0x64);export class NTQQGroupApi{static async['getGroups'](_0x46b890=![]){const _0x257be8=_0x4cf0ca,_0x319034={'xjdms':_0x257be8(0x132),'QNNjb':function(_0x1080ce,_0xbfa575,_0x2777bc){return _0x1080ce(_0xbfa575,_0x2777bc);},'sFwAr':_0x257be8(0x106),'oXAHE':function(_0x532266){return _0x532266();}};let _0x265343=![];return new Promise((_0x4bd0b9,_0x1b80a0)=>{const _0x398dab=_0x257be8;setTimeout(()=>{const _0x265694=_0x5d56;!_0x265343&&(logDebug(_0x319034['xjdms']),_0x1b80a0(_0x319034[_0x265694(0x146)]));},0x1388);const _0x46ae1e=(_0x2cef47,_0x3e73c9)=>{const _0x184c1a=_0x5d56;_0x265343=!![],_0x319034[_0x184c1a(0x13b)](logDebug,_0x319034[_0x184c1a(0x115)],_0x3e73c9),_0x4bd0b9(_0x3e73c9);};groupMemberTasks['set'](_0x319034['oXAHE'](randomUUID),_0x46ae1e),napCatCore[_0x398dab(0x105)]['getGroupService']()['getGroupList'](_0x46b890)[_0x398dab(0x143)]();});}static async['getSingleScreenNotifies'](_0x5a65bb){const _0x56d33f=_0x4cf0ca,_0x35ae8e={'tuuVH':function(_0x25105a,_0x15afd3){return _0x25105a(_0x15afd3);},'WAuhR':_0x56d33f(0x104),'pXAFu':function(_0x4141a7,_0x58a1c6,_0x48e949){return _0x4141a7(_0x58a1c6,_0x48e949);},'QDfxa':function(_0xe93f56){return _0xe93f56();}},_0x586401=napCatCore[_0x56d33f(0x105)][_0x56d33f(0x12b)]();return new Promise((_0x41e0d5,_0x59db1b)=>{const _0x38982a=_0x56d33f,_0x3e58c0={'lHrvI':function(_0x1382ca,_0x5af385){const _0x3057b4=_0x5d56;return _0x35ae8e[_0x3057b4(0x11f)](_0x1382ca,_0x5af385);}};let _0x41cb92=![];_0x35ae8e['pXAFu'](setTimeout,()=>{const _0x2c6930=_0x5d56;!_0x41cb92&&_0x35ae8e[_0x2c6930(0x11f)](_0x59db1b,_0x35ae8e['WAuhR']);},0x1388);const _0x1b6599=(_0x389bd8,_0x29a1c1,_0x5a9d62)=>{_0x41cb92=!![],_0x3e58c0['lHrvI'](_0x41e0d5,_0x5a9d62);};SingleScreenNotifiesTasks[_0x38982a(0x126)](_0x35ae8e[_0x38982a(0x107)](randomUUID),_0x1b6599),_0x586401[_0x38982a(0x10a)](![],'',_0x5a65bb);});}static async[_0x4cf0ca(0x145)](_0x2a33f4,_0x5cbbf7=0xbb8){const _0x19baa4=_0x4cf0ca,_0x47ce8a={'dnZwi':_0x19baa4(0x12c),'nWpsf':function(_0x5dad10,_0x5dcc27){return _0x5dad10!==_0x5dcc27;},'gTBna':_0x19baa4(0x136)},_0x5f0001=napCatCore[_0x19baa4(0x105)][_0x19baa4(0x12b)](),_0x20cca0=_0x5f0001[_0x19baa4(0x10e)](_0x2a33f4,_0x47ce8a[_0x19baa4(0x124)]),_0x483277=await _0x5f0001[_0x19baa4(0x142)](_0x20cca0,undefined,_0x5cbbf7);if(_0x47ce8a[_0x19baa4(0x113)](_0x483277[_0x19baa4(0x129)],0x0))throw _0x47ce8a[_0x19baa4(0x12f)]+_0x483277[_0x19baa4(0x11b)];return _0x483277[_0x19baa4(0x111)][_0x19baa4(0x134)][_0x19baa4(0x127)](_0x4f5d88=>{const _0x22e9cf=_0x19baa4;uid2UinMap[_0x4f5d88['uid']]=_0x4f5d88[_0x22e9cf(0x133)];}),_0x483277[_0x19baa4(0x111)]['infos'];}static async[_0x4cf0ca(0x114)](){}static async[_0x4cf0ca(0x139)](){}static async[_0x4cf0ca(0x125)](_0x2ac79c,_0x1cabae){const _0x3b5171=_0x4cf0ca,_0x24d533={'QPGyK':_0x3b5171(0x12e)},_0x45c341=(await NTQQUserApi[_0x3b5171(0x10b)]([_0x24d533[_0x3b5171(0x120)]]))[_0x24d533[_0x3b5171(0x120)]];return napCatCore['session'][_0x3b5171(0x12b)]()['uploadGroupBulletinPic'](_0x2ac79c,_0x45c341,_0x1cabae);}static async[_0x4cf0ca(0x10f)](_0x270cc3,_0x1ea97f,_0x1e5688){const _0x286fbb=_0x4cf0ca,_0x405781={'ocFAi':function(_0x41c1f6,_0x1aa31d){return _0x41c1f6||_0x1aa31d;}};return napCatCore[_0x286fbb(0x105)][_0x286fbb(0x12b)]()[_0x286fbb(0x10c)](![],{'operateType':_0x1ea97f,'targetMsg':{'seq':_0x270cc3[_0x286fbb(0x13a)],'type':_0x270cc3[_0x286fbb(0x11d)],'groupCode':_0x270cc3['group'][_0x286fbb(0x11a)],'postscript':_0x405781[_0x286fbb(0x122)](_0x1e5688,'')}});}static async[_0x4cf0ca(0x121)](_0x478659){const _0x2804d7=_0x4cf0ca;return napCatCore[_0x2804d7(0x105)][_0x2804d7(0x12b)]()[_0x2804d7(0x121)](_0x478659);}static async[_0x4cf0ca(0x144)](_0x3ada7a,_0x40c0d7,_0x451ab5=![],_0x1ad198=''){const _0x4fbdfd=_0x4cf0ca;return napCatCore[_0x4fbdfd(0x105)][_0x4fbdfd(0x12b)]()[_0x4fbdfd(0x144)](_0x3ada7a,_0x40c0d7,_0x451ab5,_0x1ad198);}static async['banMember'](_0x370392,_0x582245){const _0x382290=_0x4cf0ca;return napCatCore[_0x382290(0x105)]['getGroupService']()['setMemberShutUp'](_0x370392,_0x582245);}static async[_0x4cf0ca(0x112)](_0x3ee7fa,_0x1cdb38){const _0x5978b6=_0x4cf0ca;return napCatCore[_0x5978b6(0x105)][_0x5978b6(0x12b)]()[_0x5978b6(0x118)](_0x3ee7fa,_0x1cdb38);}static async[_0x4cf0ca(0x13e)](_0x3747ab,_0x45b594,_0x525d42){const _0x1c52f3=_0x4cf0ca;return napCatCore['session'][_0x1c52f3(0x12b)]()['modifyMemberCardName'](_0x3747ab,_0x45b594,_0x525d42);}static async['setMemberRole'](_0x3bc7cb,_0x30421c,_0x426011){const _0xe3acf6=_0x4cf0ca;return napCatCore[_0xe3acf6(0x105)][_0xe3acf6(0x12b)]()[_0xe3acf6(0x11c)](_0x3bc7cb,_0x30421c,_0x426011);}static async['setGroupName'](_0x2e4cf1,_0x1b5554){const _0x4ca5fc=_0x4cf0ca;return napCatCore[_0x4ca5fc(0x105)][_0x4ca5fc(0x12b)]()[_0x4ca5fc(0x109)](_0x2e4cf1,_0x1b5554,![]);}static async[_0x4cf0ca(0x12a)](_0x4ab9c6,_0x316af9,_0x129edf){}static async[_0x4cf0ca(0x131)](_0x41be18,_0x5d6238,_0xb003b1=undefined,_0x50e73e=0x0,_0x264607=0x0){const _0x397cf1=_0x4cf0ca,_0x25c02d={'cEBmW':'qun.qq.com','mOMHi':function(_0xa34a09,_0x45ecc5){return _0xa34a09(_0x45ecc5);}},_0x3c64e7=(await NTQQUserApi['getPSkey']([_0x25c02d['cEBmW']]))[_0x25c02d[_0x397cf1(0x128)]];let _0x127ee1={'text':_0x25c02d['mOMHi'](encodeURI,_0x5d6238),'picInfo':_0xb003b1,'oldFeedsId':'','pinned':_0x50e73e,'confirmRequired':_0x264607};return napCatCore[_0x397cf1(0x105)][_0x397cf1(0x12b)]()[_0x397cf1(0x131)](_0x41be18,_0x3c64e7,_0x127ee1);}}