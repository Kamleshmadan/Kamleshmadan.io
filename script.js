var names=new Array();
names[0]="Kamlesh";
names[1]="Jayesh";
names[2]="madan";
names[3]="Jash";
names[4]="sid";
names[5]="jay";
names[6]="akash";
names[7]="jain";
names[8]="Shiv";
names[9]="jivika";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
