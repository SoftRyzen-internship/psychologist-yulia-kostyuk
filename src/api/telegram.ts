const baseUrl = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/`;

export const sendMessage = async (message: string): Promise<void> => {
  const url = `${baseUrl}sendMessage?chat_id=${process.env.NEXT_PUBLIC_CHAT_ID}&text=${message}`;

  const response = await fetch(url);
};
