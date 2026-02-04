export const logAbuse = (ip: string, reason: string) => {
  console.warn(`[ABUSE] ${ip} - ${reason} - ${new Date().toISOString()}`);
};
