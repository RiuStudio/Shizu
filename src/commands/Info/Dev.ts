import { ButtonStyle, Message } from "discord.js";
import { Manager } from "../../manager.js";
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from "discord.js";
import { Command, Accessableby } from "../../structures/Command.js";
import { CommandHandler } from "../../structures/CommandHandler.js";

export default class implements Command {
  public name = ["developer"];
  public description = "Shows the developer information of the Bot (Credit)";
  public category = "Info";
  public accessableby = Accessableby.Member;
  public usage = "";
  public aliases = [];
  public lavalink = false;
  public options = [];
  public playerCheck = false;
  public usingInteraction = true;
  public sameVoiceCheck = false;

  public async execute(client: Manager, handler: CommandHandler) {
    await handler.deferReply();
    const xeondex = new EmbedBuilder()
      .setTitle(`${client.i18n.get(handler.language, "info", "dev_title")}`)
      .setDescription(
        `${client.i18n.get(handler.language, "info", "dev_desc")}`
      )
      .setFooter({
        text: `${client.i18n.get(handler.language, "info", "dev_foot")}`,
      })
      .setColor(client.color);

    const row1 = new ActionRowBuilder<ButtonBuilder>()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Github (Riu)")
          .setStyle(ButtonStyle.Link)
          .setURL("https://github.com/Adinfauzan")
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel("Support Server")
          .setStyle(ButtonStyle.Link)
          .setURL("")
      );

    await handler.editReply({ embeds: [xeondex], components: [row1] });
  }
}
