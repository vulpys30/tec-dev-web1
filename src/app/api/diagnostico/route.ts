import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre_cargo, empresa, dominio_web, contacto } = body;

    if (!nombre_cargo || !empresa || !dominio_web || !contacto) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios.' },
        { status: 400 }
      );
    }

    const cleanDomain = String(dominio_web)
      .toLowerCase()
      .replace(/^https?:\/\//, '')
      .replace(/\/.*$/, '')
      .trim();

    if (!cleanDomain.includes('.') || cleanDomain.length < 4) {
      return NextResponse.json(
        { error: 'Ingrese un dominio corporativo válido (ej: empresa.com.py).' },
        { status: 400 }
      );
    }

    const { error } = await supabase.from('diagnosticos_leads').insert([
      {
        nombre_cargo: String(nombre_cargo).slice(0, 120).trim(),
        empresa: String(empresa).slice(0, 120).trim(),
        dominio_web: cleanDomain.slice(0, 120),
        contacto: String(contacto).slice(0, 120).trim(),
      },
    ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Error al registrar en base de datos.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Solicitud inválida.' },
      { status: 400 }
    );
  }
}
