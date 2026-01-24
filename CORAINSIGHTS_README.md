# CoraInsights - Sistema de Multi-níveis de Acesso

## 📋 Resumo das Implementações

Transformamos o projeto Caminho de Cora em um portal administrativo chamado **CoraInsights** com diferentes níveis de acesso hierárquicos e uma página pública de análise de dados.

## 🎯 Níveis de Acesso Implementados

### 1. **Peregrino** (Acesso Público - Base)
- Qualquer pessoa pode se cadastrar livremente como peregrino
- Pode fazer login e editar seu perfil
- Acompanha seus próprios trajetos percorridos
- Visualiza suas conquistas e certificados
- Acesso à página: `/peregrino`
- **Este é o nível base de permissões que todos os outros herdam**

### 2. **Comerciante** (Acesso Restrito - Requer Aprovação)
- Pode se cadastrar, mas precisa de aprovação de gestor/admin
- Ao se cadastrar, deve informar dados do estabelecimento
- **Até a aprovação**: tem apenas acesso de peregrino com aviso de pendência
- **Após aprovação**: ganha acesso à área de comerciante + mantém acesso de peregrino
- Cadastro e edição de empreendimentos
- Acesso a estatísticas e análises específicas dos seus estabelecimentos
- Visualização do perfil público dos estabelecimentos
- Acesso à página: `/comerciante` (apenas se aprovado)

### 3. **Gestor** (Acesso Restrito - Apenas por Admin)
- **Não pode se auto-cadastrar** - deve ser criado/promovido por um administrador
- Gestores de governo e da trilha
- Acesso a relatórios gerenciais detalhados
- Visualização de dados e estatísticas dos peregrinos
- Gestão de trilhas, rotas e pontos de interesse
- Visualização e aprovação de estabelecimentos e comerciantes
- **Mantém todas as permissões de peregrino**
- Acesso à página: `/gestor`

### 4. **Administrador** (Acesso Total)
- Mantém acesso ao painel administrativo do Strapi
- Gestão completa do sistema
- Pode criar e promover gestores
- Pode aprovar comerciantes

## 🔐 Hierarquia de Permissões

```
Administrador (tudo)
    ↓
Gestor (gestão + peregrino)
    ↓
Comerciante Aprovado (comercial + peregrino)
    ↓
Comerciante Pendente (apenas peregrino)
    ↓
Peregrino (base)
```

**Princípio importante**: Todos os níveis superiores herdam as permissões de peregrino. Um gestor ou comerciante pode acessar trilhas, conquistas e perfil como qualquer peregrino.

## 🔧 Alterações no Backend (Strapi)

### User.settings.json
Adicionados os seguintes campos ao modelo de usuário:

```json
{
  "userType": {
    "type": "enumeration",
    "enum": ["pilgrim", "manager", "merchant"],
    "default": "pilgrim",
    "required": true
  },
  "merchantApproved": {
    "type": "boolean",
    "default": false
  },
  "merchantApprovedBy": {
    "plugin": "users-permissions",
    "model": "user"
  },
  "merchantApprovedAt": {
    "type": "datetime"
  },
  "merchantRejectedReason": {
    "type": "text"
  },
  "organizationType": {
    "type": "enumeration",
    "enum": ["government", "trail_management", "none"]
  },
  "organizationName": {
    "type": "string"
  },
  "businessName": {
    "type": "string"
  },
  "businessType": {
    "type": "string"
  },
  "businessAddress": {
    "type": "text"
  },
  "businessPhone": {
    "type": "string"
  },
  "establishments": {
    "via": "owner",
    "collection": "establishment"
  }
}
```

### establishment.settings.json
Adicionados campos para melhor gestão de estabelecimentos:

```json
{
  "owner": {
    "plugin": "users-permissions",
    "model": "user",
    "via": "establishments"
  },
  "description": {
    "type": "text"
  },
  "openingHours": {
    "type": "string"
  },
  "images": {
    "collection": "file",
    "via": "related",
    "allowedTypes": ["images"],
    "plugin": "upload",
    "required": false
  },
  "services": {
    "type": "json"
  },
  "isActive": {
    "type": "boolean",
    "default": true
  }
}
```

## 🎨 Alterações no Frontend (Next.js)

### Novos Arquivos Criados

1. **`src/hooks/authByRole.ts`**
   - Hook personalizado para autenticação por nível de acesso
   - Hooks específicos: `usePilgrimAuth()`, `useManagerAuth()`, `useMerchantAuth()`

2. **`src/pages/cora-insights.tsx`**
   - Página pública com dashboards e estatísticas
   - Acesso sem necessidade de login
   - Rankings e visualizações de dados

3. **`src/pages/peregrino/index.tsx`**
   - Dashboard do peregrino
   - Links rápidos para trilhas, perfil e conquistas

4. **`src/pages/gestor/index.tsx`**
   - Dashboard do gestor
   - Acesso a relatórios e gestão de dados

5. **`src/pages/comerciante/index.tsx`**
   - Dashboard do comerciante
   - Gestão de empreendimentos

### Arquivos Modificados

1. **`src/store/user/slice.ts`**
   - Adicionado tipo `UserType` e `OrganizationType`
   - Atualizada interface `User` com novos campos

2. **`src/pages/index.tsx`**
   - Implementado redirecionamento inteligente baseado no tipo de usuário
   - Usuários não logados vão para `/cora-insights`

3. **`src/containers/forms/LoginForm/index.tsx`**
   - Redirecionamento automático baseado em `userType` após login
   - Armazenamento dos dados do usuário no Redux

4. **`src/containers/forms/RegisterForm/index.tsx`**
   - Seleção de tipo de usuário (Peregrino/Gestor/Comerciante)
   - Campos específicos para cada tipo de usuário

5. **`src/graphql/queries.ts`**
   - Query `LOGIN` atualizada para incluir `userType`, `role`, etc.
   - Mutation `CREATE_USER` atualizada com novos campos

## 🚀 Como Usar

### Para Desenvolvedores

1. **Backend (Strapi)**
   ```bash
   cd caminho-de-cora-backend/app
   npm install
   npm run develop
   ```

2. **Frontend (Next.js)**
   ```bash
   cd caminho-de-cora-frontend
   npm install
   npm run dev
   ```

3. **Regenerar os tipos GraphQL**
   ```bash
   cd caminho-de-cora-frontend
   npm run codegen
   ```

### Fluxo de Acesso

1. **Usuário não logado**: 
   - Acessa `/` → Redireciona para `/cora-insights` (página pública)

2. **Criar Conta - Peregrino**:
   - Acessa `/cadastro` → Escolhe "Peregrino" → Preenche formulário
   - Após cadastro: pode fazer login imediatamente com acesso completo de peregrino

3. **Criar Conta - Comerciante**:
   - Acessa `/cadastro` → Escolhe "Comerciante" → Preenche formulário + dados do estabelecimento
   - ⚠️ **Cadastro criado como "pendente"**
   - Após cadastro: pode fazer login mas terá apenas acesso de peregrino
   - Exibe aviso: "Seu cadastro como comerciante está aguardando aprovação"
   - Após aprovação por gestor/admin: ganha acesso à área de comerciante

4. **Criar Conta - Gestor**:
   - ❌ **Não é possível se auto-cadastrar como gestor**
   - Formulário de cadastro mostra apenas opções: Peregrino e Comerciante
   - Gestores devem ser criados/promovidos pelo administrador no painel do Strapi

5. **Login**:
   - Acessa `/login` → Redireciona baseado no tipo:
     - Peregrino → `/peregrino`
     - Gestor → `/gestor` (com acesso também à área de peregrino)
     - Comerciante aprovado → `/comerciante` (com acesso também à área de peregrino)
     - Comerciante pendente → `/peregrino` (com aviso de pendência)
     - Admin → `/admin` (Strapi)

## 🔄 Fluxo de Aprovação de Comerciantes

1. Usuário se cadastra como comerciante
2. Sistema cria usuário com `merchantApproved = false`
3. Usuário recebe acesso apenas de peregrino
4. Gestor/Admin acessa área de aprovações (`/gestor/comerciantes-pendentes`)
5. Gestor aprova ou rejeita o cadastro
6. Se aprovado: `merchantApproved = true`, usuário ganha acesso de comerciante
7. Se rejeitado: permanece como peregrino, pode visualizar motivo da rejeição

## 📊 Próximos Passos

1. **Implementar os gráficos e dashboards**
   - Integrar biblioteca de gráficos (Chart.js, Recharts, etc.)
   - Criar queries para buscar dados reais
   - Implementar filtros e análises

2. **Páginas de sub-rotas**
   - `/gestor/relatorios`
   - `/gestor/peregrinos`
   - `/comerciante/meus-empreendimentos`
   - `/comerciante/novo-empreendimento`

3. **Sistema de permissões do Strapi**
   - Configurar roles e permissions no backend
   - Definir quais endpoints cada tipo de usuário pode acessar

4. **Melhorias de UX**
   - Adicionar loading states
   - Implementar tratamento de erros
   - Melhorar responsividade mobile

## 🔒 Segurança

- Todas as rotas protegidas usam hooks de autenticação
- Redirecionamento automático para login se não autenticado
- Validação de tipo de usuário no frontend e backend
- Tokens JWT para autenticação

## 📝 Notas Importantes

### Hierarquia de Permissões
- ✅ Todo gestor tem acesso de peregrino
- ✅ Todo comerciante aprovado tem acesso de peregrino
- ✅ Comerciantes não aprovados funcionam como peregrinos até aprovação
- ✅ Gestores não podem se auto-cadastrar (apenas admin pode criar)

### Sistema de Aprovação
- Comerciantes se cadastram normalmente mas ficam pendentes
- Gestores e admins podem aprovar/rejeitar comerciantes
- Até aprovação, comerciantes têm apenas acesso de peregrino
- Aviso visual na área de peregrino para comerciantes pendentes

### Campos Obrigatórios
- O campo `nickname` ainda é obrigatório no modelo User (manter compatibilidade)
- Para comerciantes: `businessName` e `businessType` são obrigatórios no cadastro
- Para gestores: `organizationType` e `organizationName` (definidos pelo admin)

### Interface
- Os gráficos nas páginas ainda são placeholders (implementação futura)
- As permissões no Strapi precisam ser configuradas manualmente
- Após modificações no backend, executar `npm run build` no admin do Strapi

---

**Desenvolvido para o Projeto Caminho de Cora Coralina** 🌸
