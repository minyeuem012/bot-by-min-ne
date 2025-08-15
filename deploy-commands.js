const { REST, Routes, SlashCommandBuilder } = require('discord.js');
require('dotenv').config();

const commands = [
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Trả về Pong!'),
    new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Chào người dùng')
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('🔄 Đang đăng ký slash commands...');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        );

        console.log('✅ Slash commands đã đăng ký thành công!');
    } catch (error) {
        console.error(error);
    }
})();
