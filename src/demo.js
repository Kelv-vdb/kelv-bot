if(message.member.hasPermission("ADMINISTRATOR")){
    if(message.content.startsWith(prefix + "ban")){
        let mention = message.mentions.members.first();
?
        if(mention == undefined){
            message.reply("Membre non ou mal mentionné.");
        }
        else {
            if(mention.bannable){
                mention.ban();
                message.channel.send(mention.displayName + " a été banni avec succès");
            }
        else {
         } message.reply("Impossible de bannir l'utilisateur");
        }
    }
 } 
    else if(message.content.startsWith(prefix + "mute)")){
    let mention = message.mentions.members.first();
?
    if(mention == undefined){
        message.reply("Membre non ou mal mentionné.");
    }
    else {
        mention.roles.add("765289230728953906");
        message.reply(mention.displayName + " mute avec succès.");
    }
 }
 else if(message.content.startsWith(prefix + "unmute")){
    let mention = message.mentions.members.first();
?
    if(mention == undefined){
        message.reply("Membre non ou mal mentionné.");
    }
    else {
        mention.roles.remove("765289230728953906")
        message.channel.send(mention.displayName + " unmute avec succès")
    }
 }

});