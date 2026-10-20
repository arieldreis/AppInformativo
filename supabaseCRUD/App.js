import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aitdpxcelhuqgdnfwqnz.supabase.co';
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpdGRweGNlbGh1cWdkbmZ3cW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI1MjQ3NDUsImV4cCI6MjEwODEwMDc0NX0.
7aguAfuihRisNoKGoiupbANPEv1hkVFCHuLmuXxGKDA`;
export const supabaseConnect = createClient(supabaseUrl, supabaseKey);

async function testConnection(nameTable) {
  try{
    const { data, err } = await supabaseConnect.from(nameTable).select("*");

    if( err ){
      console.error(`Erro ao acessar a tabela ${nameTable}: `, err);
    }

    console.log(`Requisição realizada com sucesso da tabela ${nameTable}: ${data} `);
  } catch ( error ){
    console.error("Erro ao realizar conexão: ", error);
  }
}

testConnection("Clientes");