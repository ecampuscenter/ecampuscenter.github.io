/* from http://widget.time.is/t.js just putting here for https so it works more univerally */
var time_is_widget=new time_is_widget()
function time_is_widget(){var ca=0,tD=0,tout=0,updint=1000,tl="",u="undefined",i
    var p={n:["Sunday.Monday.Tuesday.Wednesday.Thursday.Friday.Saturday.Sun.Mon.Tue.Wed.Thu.Fri.Sat.January.February.March.April.May.June.July.August.September.October.November.December"],w:"week ",W:"week .n",dy:" day"}
    for(i in p)p[i]=decodeURIComponent(p[i])
    p["n"]=p["n"].split(".")
    this.init=function(cl){if(tout!=0)clearInterval(time_is_widget.tout)
        var i,j,q=[],c={dayname:"%l",dname:"%D",daynum:"%d",dnum:"%j",day_in_y:"%z",week:"%W",monthname:"%F",monthnum:"%m",mnum:"%n",yy:"%y",year:"%Y","12hours":"%h",hours:"%H",minutes:"%i",seconds:"%s",AMPM:"%A"},ct="TIME",tF="%H:%i:%s",dF="%Y-%d-%m",sF="%srH:%srm-%ssH:%ssm"
        for(i in cl){cl[i]["p"]=""
            if(typeof cl[i]["id"]==u)cl[i]["id"]=i
            if(typeof cl[i]["time_format"]!=u)tF=cl[i]["time_format"]
            if(typeof cl[i]["date_format"]!=u)dF=cl[i]["date_format"]
            if(typeof cl[i]["sun_format"]!=u)sF=cl[i]["sun_format"]
            for(j in c){dF=dF.replace(j,c[j])
                tF=tF.replace(j,c[j])}
            if(typeof cl[i]["template"]!=u)ct=cl[i]["template"]
            tl="https://time.is/"+i.substr(0,cl[i]["id"].indexOf("_z")).replace("__",",_");tl="https://time.is/"+i.substr(0,i.indexOf("_z")).replace("__",",_");tl="<span onclick=\"window.location='"+tl.replace("'","\\\'")+"'\" title=\""+tl+'">'
            cl[i]["template"]=ct.replace("SUN",tl+sF+"</span>").replace("TIME",tl+tF+"</span>").replace("DATE",'<span onclick="window.location=\'https://time.is/calendar\'" title="https://time.is/calendar">'+dF+'</span>')
            if(-1==cl[i]["template"].indexOf("<sp"))cl[i]["template"]='<span onclick="window.location=\'https://time.is/\'">'+cl[i]["template"]+"</span>"
            if(typeof cl[i]["v"]==u){q.push(cl[i]["id"])
                if(typeof cl[i]["coords"]!=u)q[q.length-1]+="."+cl[i]["coords"].replace(",","_")}}
        this.ca=cl
        if(0<q.length){i=document.createElement("script")
            i.setAttribute("src","https://widget.time.is/?"+encodeURIComponent(q.join(".."))+"&t="+new Date().getTime())
            j=document.getElementsByTagName("head").item(0)
            j.appendChild(i)}else this.tick()}
    this.cb=function(t,r,a){var rpT=new Date(),n=0
        time_is_widget.tD=rpT.getTime()-t-Math.round((rpT-r)/2)
        for(i in this.ca){this.ca[i]["v"]=a[n]
            n++}
        this.tick()}
    this.tick=function(){var tU=new Date(),t=new Date(),i,c,pw
        tU.setTime(tU.getTime()-this.tD)
        if(document.getElementById)i=document.getElementById("time_is_link")
        else i=eval("time_is_link")
        if(null!=i&&i.href.indexOf("time.is/")!=-1)
            for(i in this.ca){c=this.ca[i]
                if(typeof c["v"][0]!="undefined"){if((0<c["v"][1])&&(c["v"][1]<tU.getTime())){c["v"][0]=c["v"][2]
                    c["v"][1]=0}
                    t.setTime(c["v"][0]*60000+tU.getTime())
                    var d,y=t.getUTCFullYear()+"",m=t.getUTCMonth()+1,N=new Date(y,0,1),o=N.getDay()-1
                    if(o==-1)o=6
                    var W=Math.floor((t-N+N.getTimezoneOffset()*60000)/604800000+(o/7)),dn=p["dy"]+" "+Math.floor((t-N+N.getTimezoneOffset()*60000)/86400000+1)
                    if(o<4)W++
                    if(W==0){W=52
                        if(new Date(y-1,0,1).getDay()==4||new Date(y-1,11,31).getDay()==4)W=53}
                    if(p["W"]=="hy"){if(W==1)pw="1-ին շաբաթ";else pw=W+"-րդ շաբաթ"}else pw=p["W"].replace(".n",W)
                    var g={t:t.getUTCHours(),r:c["v"][3],s:c["v"][5]},h={},j
                    for(j in g){h[j]=l0(g[j])
                        h[j+"H"]=h[j]
                        h[j+"M"]="AM"
                        if(11<g[j]){h[j+"M"]="PM"
                            h[j]=l0(g[j]-12)}
                        if(h[j]=="00")h[j]=12}
                    d=c["template"].replace("srhour",h["rH"]).replace("sr12hour",h["r"]).replace("srAMPM",h["rM"]).replace("srminute",l0(c["v"][4])).replace("sshour",h["sH"]).replace("ss12hour",h["s"]).replace("ssAMPM",h["sM"]).replace("ssminute",l0(c["v"][6])).replace("dlhours",c["v"][7]).replace("dlminutes",c["v"][8]).replace("%h",h["t"]).replace("%H",h["tH"]).replace("%i",l0(t.getUTCMinutes())).replace("%s",l0(t.getUTCSeconds())).replace("%A",h["tM"]).replace("%j",t.getUTCDate()).replace("%d",l0(t.getUTCDate())).replace("%W",pw).replace("%n",m).replace("%m",l0(m)).replace("%y",y.substr(2,2)).replace("%Y",y).replace("%F",p["n"][13+m]).replace("%l",p["n"][t.getUTCDay()]).replace("%D",p["n"][7+t.getUTCDay()]).replace("%z",dn)
                    j=d.indexOf(">")
                    d=d.substr(0,j+1)+d.substr(j+1,1).toUpperCase()+d.substr(j+2,d.length-1)
                    if(d!=c["p"]){if(document.getElementById)o=document.getElementById(i);else o=eval()
                        if(null!=o){o.innerHTML=d;c["p"]=d}}}
                if (typeof c["callback"]!=u)eval(c["callback"]+"(d)")}
        tout=setTimeout('time_is_widget.tick("")',updint-tU%updint)}
    function l0(n){return n>9?n:"0"+n}}
