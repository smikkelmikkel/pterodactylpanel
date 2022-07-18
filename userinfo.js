const {
    SlashCommandBuilder
  } = require('@discordjs/builders');
const { MessageEmbed, Message } = require('discord.js');
const config = require("../config.json")
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('userinfo')
      .setDescription('Krijg de userinfo te zien'),
      

  
    async execute(interaction, client) {

        const userinfo = new MessageEmbed()
        .setTitle("User informatie")
        .setDescription(`Zie je user informatie`)
        .addField("Username", `${interaction.user.username}`)
        .addField("Discriminator", `${interaction.user.discriminator}`)
        .addField("User tag", `${interaction.user.username}#${interaction.user.discriminator}`)
        .addField("User ID", `${interaction.user.id}`)
        .addField("Gemaakt op", `${interaction.user.createdAt}`)
        .setColor("BLUE")
        .setTimestamp()
        .setFooter(config.footerText)

        interaction.reply ({
            embeds: [userinfo]
        })
        

    }
}