//WARNING! THIS CODE IS NOT VALID JS, BUT IT IS MADE IN A SCRATCH LIKE ENGINE NAMED SCOOLCODE, WHICH USES STAGESCRIPT

stage {
    default backdrop windowsxpback("user:medintu.vlad/windowsxpback")
    backdrop bsod_yaaaay("user:medintu.vlad/bsod yaaaay")
    backdrop BOOT_DEVICE_NOT("user:medintu.vlad/BOOT DEVICE NOT")
    backdrop dellstart("user:medintu.vlad/dellstart")
    backdrop welcomewin("user:medintu.vlad/welcomewin")
    backdrop trying_to_boot("user:medintu.vlad/trying to boot")
    backdrop msdosw("user:medintu.vlad/msdosw")
    backdrop msdos("user:medintu.vlad/msdos")
    backdrop msdoswi("user:medintu.vlad/msdoswi")
    backdrop msdoswin("user:medintu.vlad/msdoswin")
    sound Microsoft_Windo("user:medintu.vlad/Microsoft Windo")
    sound Random_Beep_Noi("user:medintu.vlad/Random Beep Noi")
    let start10 = 0;
    let INTERNETEXPLORER = 0;
    when started {
        start10 = false;
        this.setScene(this.dellstart);
        this.wait(2);
        this.setScene(this.welcomewin);
        this.playSoundAndWait(this.Microsoft_Windo);
        this.wait(1);
        this.setScene(this.windowsxpback);
        this.broadcast("bootedup");
    }
    when signalReceived("bsod") {
        this.wait(5);
        this.setScene(this.bsod_yaaaay);
        this.playSoundAndWait(this.Random_Beep_Noi);
        this.setScene(this.dellstart);
        this.wait(2);
        this.setScene(this.trying_to_boot);
        this.wait(2);
        this.setScene(this.BOOT_DEVICE_NOT);
        while(!this.isKeyPressed("enter"));
        this.setScene(this.msdos);
        this.broadcast("mask");
        while(!this.isKeyPressed("w"));
        this.broadcast("maskw");
        this.setScene(this.msdosw);
        while(!this.isKeyPressed("i"));
        this.broadcast("maskwi");
        this.setScene(this.msdoswi);
        while(!this.isKeyPressed("n"));
        this.broadcast("maskwin");
        this.setScene(this.msdoswin);
        while(!this.isKeyPressed("enter"));
        this.broadcast("byebye");
        this.setScene(this.welcomewin);
        this.playSoundAndWait(this.Microsoft_Windo);
        this.wait(1);
        this.setScene(this.windowsxpback);
        this.broadcast("bootedup");
    }
    when signalReceived("ieopen") {
        INTERNETEXPLORER = true;
    }
    when signalReceived("ieclosed") {
        INTERNETEXPLORER = false;
    }
    
    actor IEdesktopicon {
        costume InternetExplore("user:medintu.vlad/InternetExplore")
        when stage.started {
            this.hide();
        }
        when stage.signalReceived("bootedup") {
            this.show();
            this.size = 15;
            this.setPosition(-290, 150);
        }
        when clicked {
            broadcast("ieopen");
            this.wait(1);
            broadcast("bsod");
        }
        when stage.signalReceived("bsod") {
            this.wait(5);
            this.hide();
        }
    }
    
    actor msmenuicon {
        costume Minesweeper("user:medintu.vlad/Minesweeper")
        costume Minesweepeersel("user:medintu.vlad/Minesweepeersel")
        when stage.started {
            this.goToFront();
            this.size = 35;
            this.setPosition(-278, -34);
            this.hide();
            this.hide();
        }
        when stage.signalReceived("bsod") {
            this.wait(5);
            this.hide();
        }
        when stage.signalReceived("start") {
            if(start10) {
                this.hide();
            }
            else {
                this.show();
            }
        }
        when stage.started {
            while(true) {
                if(this.isPointerOver()) {
                    this.setCostume(this.Minesweepeersel);
                }
                else {
                    this.setCostume(this.Minesweeper);
                }
            }
        }
    }
    
    actor rage {
        costume rage100("user:medintu.vlad/rage100")
        sound Microsoft_Windo("user:medintu.vlad/Microsoft Windo")
        when stage.started {
            this.hide();
        }
        when stage.signalReceived("bsod") {
            this.wait(5);
            this.hide();
        }
    }
    
    actor aolonumerentu {
        costume iewinnmn("user:medintu.vlad/iewinnmn")
        when stage.started {
            this.size = 24;
            this.hide();
        }
        when stage.signalReceived("ieopen") {
            this.show();
        }
        when stage.signalReceived("bsod") {
            this.wait(5);
            this.hide();
        }
        when clicked {
            broadcast("ieclosed");
        }
        when stage.signalReceived("ieclosed") {
            this.hide();
        }
    }
    
    actor Cacatus {
        costume cacatus("user:medintu.vlad/cacatus")
        when stage.signalReceived("bsod") {
            this.wait(5);
            this.opacity = 0;
        }
        when stage.started {
            this.setPosition(0, 50);
            this.size = 10;
            this.hide();
        }
        when stage.signalReceived("ieopen") {
            while(true) {
                this.show();
                this.glideSecondsTo(0.5, -50, 50);
                this.hide();
                this.wait(Math.randomBetween(0, 2));
                this.show();
                this.setPosition(0, 50);
            }
        }
        when stage.signalReceived("ieclosed") {
            while(true) {
                this.hide();
            }
        }
    }
    
    actor Winampmenuicon {
        costume winampicon("user:medintu.vlad/winampicon")
        costume winampiconsel("user:medintu.vlad/winampiconsel")
        when stage.started {
            this.size = 35;
            this.setPosition(-275, -17);
            this.goToFront();
            this.hide();
            this.hide();
        }
        when stage.signalReceived("start") {
            if(start10) {
                this.hide();
            }
            else {
                this.show();
            }
        }
        when stage.started {
            while(true) {
                if(this.isPointerOver()) {
                    this.setCostume(this.winampiconsel);
                }
                else {
                    this.setCostume(this.winampicon);
                }
            }
        }
        when clicked {
            broadcast("winamp");
        }
    }
    
    actor IEmenuicon {
        costume ieicon("user:medintu.vlad/ieicon")
        costume ieiconsel("user:medintu.vlad/ieiconsel")
        when stage.started {
            this.goToFront();
            this.hide();
            this.size = 35;
            this.setPosition(-275, 0);
            this.hide();
        }
        when stage.signalReceived("start") {
            if(start10) {
                this.hide();
            }
            else {
                this.show();
            }
        }
        when stage.started {
            while(true) {
                if(this.isPointerOver()) {
                    this.setCostume(this.ieiconsel);
                }
                else {
                    this.setCostume(this.ieicon);
                }
            }
        }
        when clicked {
            broadcast("ieopen");
        }
    }
    
    actor Taskbar {
        costume tasbarwindowsxp("user:medintu.vlad/tasbarwindowsxp")
        when stage.started {
            this.hide();
        }
        when stage.signalReceived("bootedup") {
            this.show();
            this.setPosition(0, -174);
            this.size = 33.5;
        }
        when stage.signalReceived("bsod") {
            this.hide();
        }
    }
    
    actor STARTMENU {
        costume theacttualstart("user:medintu.vlad/theacttualstart")
        when stage.started {
            this.size = 35;
            this.setPosition(-235, -62);
            this.hide();
        }
        when stage.signalReceived("start") {
            if(start10) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    }
    
    actor Start {
        costume startwinxp("user:medintu.vlad/startwinxp")
        when stage.signalReceived("bootedup") {
            this.show();
            this.setPosition(-300, -174);
            this.size = 33.5;
        }
        when stage.signalReceived("bsod") {
            this.wait(5);
            this.hide();
        }
        when stage.started {
            this.hide();
        }
        when clicked {
            broadcast("start");
            if(start10) {
                start10 = false;
            }
            else {
                start10 = true;
            }
        }
    }
    
    actor NCmenuicon {
        costume NCmenuicon("user:medintu.vlad/northoncommande")
        costume NCmenuicon_sel("user:medintu.vlad/northoncommands")
        when stage.signalReceived("start") {
            if(start10) {
                this.hide();
            }
            else {
                this.show();
            }
        }
        when stage.started {
            while(true) {
                if(this.isPointerOver()) {
                    this.setCostume(this.NCmenuicon_sel);
                }
                else {
                    this.setCostume(this.NCmenuicon);
                }
            }
        }
        when stage.started {
            this.goToFront();
            this.hide();
            this.size = 35;
            this.setPosition(-278.5, -50);
            this.hide();
        }
    }
    
    actor jurasikpark {
        costume dino01("user:medintu.vlad/dino01")
        costume dino10("user:medintu.vlad/dino10")
        when stage.started {
            this.setPosition(-50, 50);
            this.size = 10;
            this.hide();
        }
        when stage.signalReceived("bsod") {
            this.wait(5);
            this.hide();
        }
        when stage.signalReceived("ieopen") {
            this.show();
        }
        when stage.keyPressed("space") {
            this.glideSecondsTo(0.2, -50, 69);
            this.wait(0.3);
            this.glideSecondsTo(0.2, -50, 50);
        }
        when stage.started {
            while(true) {
                if(this.touching(Cacatus)) {
                    this.wait(0.2);
                    if(this.touching(Cacatus)) {
                        broadcast("game over");
                    }
                }
            }
        }
        when stage.signalReceived("ieclosed") {
            this.hide();
        }
    }
    
    actor Winamp {
        costume WINMAP("user:medintu.vlad/WINMAP")
        when stage.started {
            this.hide();
            this.size = 30;
        }
        when stage.signalReceived("winamp") {
            this.setPosition(-27, 27);
            this.show();
        }
        when clicked {
            broadcast("winampclosed");
        }
        when stage.signalReceived("winampclosed") {
            this.hide();
        }
    }
    
    actor plei {
        costume playpause("user:medintu.vlad/playpause")
        sound Bopeebo__Friday("user:medintu.vlad/Bopeebo  Friday")
        sound Laser_shot_2("gallery:Effects/Laser shot 2")
        when stage.started {
            this.setPosition(-60, 50);
            this.size = 30;
            this.hide();
        }
        when stage.signalReceived("winamp") {
            this.show();
            this.wait(0.1);
            this.goToFront();
        }
        when stage.signalReceived("winampclosed") {
            this.hide();
            this.playSound(this.Laser_shot_2);
        }
        when clicked {
            this.playSoundAndWait("Bopeebo__Friday");
        }
    }
}
