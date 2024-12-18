import { getCloudflareContext } from '@opennextjs/cloudflare';

let envCache: Record<string, any> | null = null;

export async function getEnv() {
    if (!envCache) {
        const { env } = await getCloudflareContext();
        envCache = env;
    }
    return envCache;
}
