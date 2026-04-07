import { getGalerias } from '../../lib/cloudinary.js';

export async function GET() {
    const galerias = await getGalerias();
    return new Response(JSON.stringify(galerias), {
        headers: { 'Content-Type': 'application/json' }
    });
}
