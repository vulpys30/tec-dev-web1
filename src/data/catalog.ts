export type CapabilityId = 'offensive' | 'defensive' | 'devsecops' | 'software';

export interface ServiceGroup {
  title: string;
  tag: string;
  items: string[];
}

export interface CapabilityTab {
  id: CapabilityId;
  label: string;
  code: string;
  headline: string;
  summary: string;
  groups: ServiceGroup[];
}

export const SITE_CONFIG = {
  brand: 'TEC_DEV',
  domain: 'tecdev.com.py',
  email: 'contacto@tecdev.com.py',
  instagram: 'https://instagram.com',
  instagramHandle: '@rtec_dev',
  location: 'Asunción / Gran Asunción, Paraguay',
  whatsappNumber: '595981000000',
};

export const CAPABILITIES: CapabilityTab[] = [
  {
    id: 'offensive',
    label: 'Seguridad Ofensiva',
    code: 'RED_TEAM // 01',
    headline: 'Simulación de adversarios y pruebas de penetración controladas',
    summary:
      'Evaluamos sus aplicaciones, redes y operaciones con la mentalidad y herramientas de un atacante real antes de que una brecha ocurra.',
    groups: [
      {
        title: 'Pentesting de Aplicaciones Web y APIs',
        tag: 'OWASP TOP 10',
        items: [
          'Inyección SQL, XSS, CSRF, SSRF, IDOR y evasión controlada de WAF',
          'Testing de lógica de negocio (bypass de flujos de pago y escalación de privilegios)',
          'Auditoría de APIs REST y GraphQL (autenticación, rate limiting, exposición de datos)',
          'Fuzzing exhaustivo de endpoints y parámetros críticos',
        ],
      },
      {
        title: 'Pentesting de Aplicaciones Móviles',
        tag: 'ANDROID & iOS',
        items: [
          'Android: análisis estático/dinámico de APKs e ingeniería reversa (Frida, Objection, jadx)',
          'iOS: análisis de binarios, interceptación de tráfico y bypass de SSL pinning',
          'Revisión de almacenamiento inseguro (SharedPreferences, Keychain, SQLite)',
          'Validación de certificate pinning, manejo de tokens y protección anti-tampering',
        ],
      },
      {
        title: 'Infraestructura y Dispositivos Financieros',
        tag: 'INFRA & ATMs',
        items: [
          'Reconocimiento externo (OSINT), enumeración y explotación controlada (Nessus, Nuclei)',
          'Pentesting interno: Active Directory, movimiento lateral, Kerberoasting, Pass-the-Hash',
          'Evaluación de segmentación de red y redes Wi-Fi (WPA2/WPA3, rogue AP, evil twin)',
          'Auditoría de ATMs y terminales financieros (protocolos XFS, ISO 8583 y firmware)',
        ],
      },
      {
        title: 'Red Team Completo y Revisión de Código',
        tag: 'MITRE ATT&CK',
        items: [
          'Simulación de campañas completas, ejercicios Purple Team e ingeniería social/phishing',
          'Emulación controlada de ransomware, RATs/C2, exfiltración y resiliencia de backups',
          'Auditoría manual de código fuente (.NET, Python, Java, Node.js) y secretos en repositorios',
          'Análisis de dependencias vulnerables (SCA), fuzzing de protocolos y exploits PoC',
        ],
      },
    ],
  },
  {
    id: 'defensive',
    label: 'Seguridad Defensiva',
    code: 'BLUE_TEAM // 02',
    headline: 'Endurecimiento de infraestructura, monitoreo SOC y cumplimiento',
    summary:
      'Reducimos la superficie de ataque, implementamos detección temprana y alineamos su organización con marcos regulatorios.',
    groups: [
      {
        title: 'Hardening y Gestión de Vulnerabilidades',
        tag: 'CIS BENCHMARKS',
        items: [
          'Hardening de servidores (Windows Server, Linux), Active Directory (GPOs, tiering, LAPS)',
          'Endurecimiento de bases de datos (PostgreSQL, Oracle, SQL Server) y Kubernetes',
          'Programa continuo de escaneo (Nessus, OpenVAS, Qualys) priorizado por CVSS y negocio',
          'Entrega de reportes ejecutivos/técnicos y verificación de remediación (re-testing)',
        ],
      },
      {
        title: 'Monitoreo SOC, WAF y Correo Corporativo',
        tag: 'DETECCIÓN 24/7',
        items: [
          'Diseño e implementación de SIEM (Wazuh, Elastic SIEM, Splunk) y playbooks SOAR',
          'Implementación y tuning de WAF (Cloudflare, AWS WAF, Azure WAF, ModSecurity)',
          'Configuración de SPF, DKIM, DMARC, gateways antispam y simulaciones anti-phishing',
        ],
      },
      {
        title: 'Respuesta a Incidentes y Análisis Forense',
        tag: 'IR & FORENSICS',
        items: [
          'Contención y erradicación inmediata de amenazas activas en red',
          'Análisis forense digital sobre memoria, disco, tráfico de red y registros de eventos',
          'Investigación de ransomware y compromiso de cuentas con Root Cause Analysis',
        ],
      },
      {
        title: 'Cloud, IAM y Cumplimiento Regulatorio',
        tag: 'BCP & ISO 27001',
        items: [
          'Auditoría de configuración en Azure, AWS y GCP bajo CIS Benchmarks Cloud',
          'Control de identidades (IAM), MFA, acceso condicional y arquitectura Zero Trust',
          'Gap Analysis contra regulaciones del BCP Paraguay, PCI DSS, NIST CSF e ISO 27001',
          'Evaluación complementaria de seguridad física y controles de acceso perimetral',
        ],
      },
    ],
  },
  {
    id: 'devsecops',
    label: 'DevSecOps',
    code: 'CI/CD_SEC // 03',
    headline: 'Seguridad automatizada desde el primer commit hasta producción',
    summary:
      'Integramos controles automáticos en sus pipelines para detectar y bloquear vulnerabilidades antes de que lleguen a sus usuarios.',
    groups: [
      {
        title: 'Seguridad en Pipelines CI/CD y SCA',
        tag: 'AUTOMATION',
        items: [
          'Análisis estático SAST (SonarQube, Semgrep, Checkmarx) y dinámico DAST (OWASP ZAP)',
          'Escaneo continuo de credenciales y secretos en repositorios (GitLeaks, TruffleHog)',
          'Análisis de Composición de Software (SCA) y monitoreo de CVEs en librerías de terceros',
          'Quality Gates automáticos para bloquear despliegues con hallazgos críticos',
        ],
      },
      {
        title: 'Infraestructura como Código (IaC) y Contenedores',
        tag: 'CLOUD NATIVE',
        items: [
          'Revisión automatizada de Terraform, Bicep y ARM templates (Checkov, tfsec)',
          'Políticas de seguridad como código mediante OPA y Kyverno',
          'Hardening de clústeres Kubernetes (CIS Benchmark), Network Policies, RBAC y runtime (Falco)',
          'Escaneo de vulnerabilidades en imágenes Docker (Trivy, Grype)',
        ],
      },
      {
        title: 'Madurez DevSecOps y Capacitación Técnica',
        tag: 'ENABLEMENT',
        items: [
          'Assessment de madurez, roadmap incremental y métricas (MTTR, densidad de fallas)',
          'Talleres prácticos de Secure Coding (.NET, Python, Java, Node.js) y OWASP Top 10',
          'Formación y acompañamiento de Security Champions internos',
        ],
      },
    ],
  },
  {
    id: 'software',
    label: 'Software & IA',
    code: 'AI_ENG // 04',
    headline: 'Ingeniería backend robusta y agentes autónomos con inteligencia artificial',
    summary:
      'Desarrollamos plataformas a medida, automatizamos flujos operativos complejos e implementamos IA empresarial con guardrails de seguridad.',
    groups: [
      {
        title: 'Agentes Inteligentes con IA y RAG',
        tag: 'AGENTIC AI',
        items: [
          'Agentes autónomos de negocio y agentes de seguridad (recon, análisis de phishing)',
          'Orquestación multi-agente (LangGraph) y sistemas RAG sobre documentación interna',
          'Integración con LLMs cloud (OpenAI, Anthropic, Google) y on-premise (Ollama, LiteLLM)',
          'Guardrails de seguridad (filtrado input/output, rate limiting) y conexión vía MCP',
        ],
      },
      {
        title: 'Chatbots y Automatización de Procesos',
        tag: 'RPA & WORKFLOWS',
        items: [
          'Asistentes conversacionales para WhatsApp Business, Web y Telegram con escalamiento humano',
          'Integración nativa con sistemas CRM, ERP, ticketing y facturación',
          'Bots RPA, workflows automatizados con n8n / Apache Airflow y pipelines de datos ETL',
        ],
      },
      {
        title: 'Desarrollo Backend, Plataformas y Soporte',
        tag: 'CLEAN ARCH',
        items: [
          'APIs REST/GraphQL y microservicios en .NET (C#) y FastAPI (Python) bajo Clean Architecture',
          'Bases de datos (PostgreSQL, Oracle, SQL Server, MongoDB) y colas (RabbitMQ, Redis, Kafka)',
          'Dashboards a medida, portales corporativos, MVPs y mantenimiento evolutivo de sistemas legacy',
        ],
      },
    ],
  },
];

export const TECH_STACK = [
  {
    domain: 'Seguridad Ofensiva',
    stack: 'OWASP · PTES · MITRE ATT&CK · Burp Suite · Nmap · Metasploit · Frida · Nessus · Nuclei',
  },
  {
    domain: 'Seguridad Defensiva',
    stack: 'NIST CSF · ISO 27001 · CIS Benchmarks · Wazuh · Elastic SIEM · Splunk · Falco · Qualys',
  },
  {
    domain: 'DevSecOps',
    stack: 'SonarQube · Semgrep · OWASP ZAP · Trivy · Grype · GitLeaks · Checkov · OPA · Kyverno',
  },
  {
    domain: 'Desarrollo & Cloud',
    stack: '.NET (C#) · FastAPI (Python) · PostgreSQL · Oracle · SQL Server · Azure · Kubernetes · Docker',
  },
  {
    domain: 'IA & Automatización',
    stack: 'LangGraph · OpenAI API · Anthropic API · Ollama · LiteLLM · MCP · RAG · n8n · Airflow',
  },
];
