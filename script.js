var names=new Array();
names[0]="Kamlesh";
names[1]="prathmesh";
names[2]="madan";
names[3]="sid";
names[4]="akash";
names[5]="shiv";
names[6]="shardul";
names[7]="suraj";
names[8]="parth";
names[9]="omkar";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}