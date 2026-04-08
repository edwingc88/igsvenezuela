import { g as getGalerias } from './cloudinary_yWkuIIGD.mjs';

async function GET() {
    const galerias = await getGalerias();
    return new Response(JSON.stringify(galerias), {
        headers: { 'Content-Type': 'application/json' }
    });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
