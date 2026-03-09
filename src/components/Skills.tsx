"use client";

import { useState } from "react";
import Modal, { ModalCloseButton } from "./Modal";

const toolDetails: Record<
  string,
  { category: string; howIUseIt: string; impact: string; usedAt: string[] }
> = {
  LangChain: {
    category: "AI & Automation",
    howIUseIt:
      "Built multi-step agent pipelines connecting LLM reasoning with external tools, APIs, and vector memory. Designed retrieval-augmented generation workflows for structured task execution across multiple products. Used it to create reusable agent components that could be composed into larger systems.",
    impact:
      "Reduced prompt engineering overhead significantly and enabled faster agent feature development. Established reusable patterns that the team could build on without starting from scratch.",
    usedAt: ["AgentLens", "Markopolo AI"],
  },
  "OpenAI API": {
    category: "AI & Automation",
    howIUseIt:
      "Integrated GPT-4 for conversational interfaces, text embeddings for semantic search, and function calling for structured agent outputs. Used across multiple products as the primary inference layer for AI-powered features. Managed API costs through prompt optimization and response caching strategies.",
    impact:
      "Enabled rapid AI feature delivery without the overhead of model training or fine-tuning. Allowed the team to iterate on AI features weekly rather than in longer cycles.",
    usedAt: ["AgentLens", "Finni AI", "Markopolo AI"],
  },
  "Claude API": {
    category: "AI & Automation",
    howIUseIt:
      "Integrated Anthropic's Claude for tasks requiring long-context understanding and nuanced document analysis. Used as a secondary model in multi-LLM pipelines where reasoning quality matters more than speed. Applied it specifically for evaluation and reflection steps within agent workflows.",
    impact:
      "Improved output quality on complex reasoning tasks compared to single-model approaches. Enabled more reliable agent behavior on edge cases that shorter-context models struggled with.",
    usedAt: ["AgentLens", "Finni AI"],
  },
  Cursor: {
    category: "AI & Automation",
    howIUseIt:
      "Primary development environment for AI-assisted coding across all current projects. Used for architecture planning, feature implementation, debugging, and code reviews with AI pair programming. Leveraged it to build and ship entire MVP products significantly faster than traditional workflows.",
    impact:
      "Reduced time from idea to working prototype, enabling faster validation cycles. Allowed a small team to move at a pace typically requiring a larger engineering team.",
    usedAt: ["AgentLens", "Finni AI", "Portfolio"],
  },
  n8n: {
    category: "AI & Automation",
    howIUseIt:
      "Designed and maintained automation workflows for lead nurturing sequences, CRM data syncs, and internal notification systems. Built multi-step workflows connecting product events to downstream business actions without engineering involvement. Used it to automate repetitive operational tasks across marketing and customer success.",
    impact:
      "Freed up team time from manual data entry and follow-up tasks significantly. Enabled non-technical team members to manage automations independently after initial setup.",
    usedAt: ["Markopolo AI", "TimeTackle"],
  },
  Zapier: {
    category: "AI & Automation",
    howIUseIt:
      "Connected 10+ SaaS tools across the stack using automated triggers and actions. Built workflows for user lifecycle events, support ticket routing, and cross-platform data syncs. Used primarily for quick integrations where speed of setup mattered over customization.",
    impact:
      "Reduced manual work for operations and marketing teams on routine processes. Enabled the team to validate integration ideas quickly before investing in custom-built solutions.",
    usedAt: ["TimeTackle", "Markopolo AI"],
  },
  Make: {
    category: "AI & Automation",
    howIUseIt:
      "Built complex branching automations handling data transformation, conditional logic, and multi-step API interactions. Used for scenarios requiring more control than Zapier — particularly around error handling and data mapping. Designed workflows for customer onboarding, reporting pipelines, and cross-platform syncs.",
    impact:
      "Streamlined several business processes that previously required manual intervention or custom code. Improved reliability of data flows between systems with better error visibility.",
    usedAt: ["Markopolo AI", "CrossFund"],
  },
  AutoGen: {
    category: "AI & Automation",
    howIUseIt:
      "Implemented multi-agent conversation patterns where specialized agents collaborate to complete complex tasks. Used to design agent orchestration logic with clearly defined roles and handoff protocols. Experimented with self-reflection and critique loops to improve agent output quality.",
    impact:
      "Enabled agent collaboration patterns that handled tasks too complex for single-agent approaches. Provided a foundation for AgentLens's observability use cases around multi-agent systems.",
    usedAt: ["AgentLens"],
  },
  CrewAI: {
    category: "AI & Automation",
    howIUseIt:
      "Designed role-based agent crews with defined responsibilities, tools, and task delegation logic. Built Finni AI's 9 micro-agent architecture using CrewAI's crew and task primitives. Used it to assign specific financial analysis roles to individual agents within the same pipeline.",
    impact:
      "Enabled modular agent design where individual agents could be updated without rebuilding the full system. Made the multi-agent architecture easier to debug, test, and iterate on.",
    usedAt: ["Finni AI", "AgentLens"],
  },
  LangSmith: {
    category: "AI Research & Evaluation",
    howIUseIt:
      "Set up end-to-end tracing for LLM chains and agent runs to capture inputs, outputs, and latency at every step. Used evaluation pipelines to score agent outputs against defined quality criteria. Leveraged it for debugging unexpected agent behavior in production scenarios.",
    impact:
      "Reduced time spent debugging agent failures by providing structured trace data. Gave the team confidence in deploying agent updates by catching regressions early.",
    usedAt: ["AgentLens"],
  },
  Figma: {
    category: "Product & Design",
    howIUseIt:
      "Led product design from early wireframes through to developer-ready high-fidelity prototypes. Ran collaborative design sprints with stakeholders and facilitated user testing sessions to validate assumptions. Maintained shared component libraries to keep design consistent across product surfaces.",
    impact:
      "Improved design-to-development handoff quality and reduced back-and-forth during implementation. Helped align stakeholders early through visual prototypes before any engineering work began.",
    usedAt: ["TimeTackle", "Markopolo AI", "AgentLens", "Finni AI"],
  },
  Mixpanel: {
    category: "Product & Design",
    howIUseIt:
      "Instrumented product events, built conversion funnels, and created retention cohort reports to understand user behavior. Used it to identify drop-off points in onboarding flows and prioritize fixes based on impact. Set up dashboards for weekly product health reviews with the team.",
    impact:
      "Supported more informed product decisions by grounding discussions in behavioral data. Helped identify and address the highest-impact friction points in user activation flows.",
    usedAt: ["TimeTackle", "Markopolo AI"],
  },
  Amplitude: {
    category: "Product & Design",
    howIUseIt:
      "Set up behavioral analytics and ran A/B experiments to validate product hypotheses before full rollout. Used it to segment users by behavior and understand which features drove long-term retention. Collaborated with engineering to define a clean event taxonomy from the start.",
    impact:
      "Enabled roadmap prioritization based on actual user data rather than assumptions. Improved confidence in shipping decisions by testing changes with a subset of users first.",
    usedAt: ["TimeTackle", "Resume Done"],
  },
  PostHog: {
    category: "Product & Design",
    howIUseIt:
      "Deployed self-hosted PostHog for product analytics, session recordings, and feature flag management. Used feature flags to run controlled rollouts and kill switches for new features safely. Session recordings provided qualitative context to complement quantitative funnel data.",
    impact:
      "Gave the team full-stack visibility into user behavior while keeping data on our own infrastructure. Reduced time between deploying a feature and understanding how users actually interact with it.",
    usedAt: ["AgentLens"],
  },
  Hotjar: {
    category: "Product & Design",
    howIUseIt:
      "Used heatmaps and scroll maps to understand how users engaged with key pages and landing flows. Reviewed session recordings to identify confusing UI patterns and unexpected user behaviors. Combined findings with quantitative data to build a complete picture of user experience issues.",
    impact:
      "Informed targeted UX improvements that were validated by follow-up recording reviews. Helped make a stronger case for design changes by showing stakeholders real user behavior.",
    usedAt: ["TimeTackle", "Markopolo AI"],
  },
  JIRA: {
    category: "Product & Design",
    howIUseIt:
      "Managed sprint planning, backlog grooming, and release tracking across product and engineering teams. Defined ticket workflows and acceptance criteria standards to improve development clarity. Used it to maintain visibility across multiple workstreams running in parallel.",
    impact:
      "Kept engineering and product aligned on priorities with clear sprint goals and progress tracking. Reduced ambiguity in development tickets by establishing consistent specification practices.",
    usedAt: ["TimeTackle", "CrossFund"],
  },
  Productboard: {
    category: "Product & Design",
    howIUseIt:
      "Centralized customer feedback from multiple sources and linked it directly to roadmap features. Used scoring frameworks to prioritize features based on user value and strategic fit. Ran regular feedback review sessions with the team using Productboard as the single source of truth.",
    impact:
      "Made roadmap decisions more transparent and grounded in real customer input. Helped communicate prioritization decisions to stakeholders with clear evidence.",
    usedAt: ["TimeTackle"],
  },
  ClickUp: {
    category: "Product & Design",
    howIUseIt:
      "Managed tasks, docs, and goals in a unified workspace for product and engineering teams. Used it for sprint planning, documentation, and cross-functional visibility. Built custom views to track different workstreams and priorities.",
    impact:
      "Reduced context switching between tools for task management and documentation. Improved team alignment on priorities with shared visibility into work progress.",
    usedAt: ["TimeTackle", "Markopolo AI"],
  },
  Miro: {
    category: "Product & Design",
    howIUseIt:
      "Facilitated collaborative workshops for product discovery, user journey mapping, and sprint planning. Used async boards for distributed team alignment and idea sharing. Ran live sessions for stakeholder alignment on product strategy.",
    impact:
      "Enabled effective remote collaboration on complex product decisions. Improved stakeholder buy-in through visual participation in planning sessions.",
    usedAt: ["TimeTackle", "Markopolo AI"],
  },
  Notion: {
    category: "Customer Facing",
    howIUseIt:
      "Built and maintained product wikis, feature specifications, OKR tracking pages, and team onboarding docs. Used it as the central knowledge base to keep distributed teams aligned and reduce repeated context-sharing. Created templates for recurring processes like sprint planning and user research documentation.",
    impact:
      "Reduced onboarding time for new team members by centralizing key information in one place. Improved consistency in how product work was documented and communicated across teams.",
    usedAt: ["TimeTackle", "Markopolo AI", "AgentLens"],
  },
  Tableau: {
    category: "Analytics & Data",
    howIUseIt:
      "Built executive dashboards tracking product KPIs, revenue metrics, and customer health indicators. Connected to multiple data sources to give leadership a unified view of business performance. Maintained weekly reporting cadences with consistent dashboard templates.",
    impact:
      "Gave leadership reliable visibility into key metrics without relying on ad-hoc data requests. Reduced time spent on manual reporting by automating recurring dashboard refreshes.",
    usedAt: ["TimeTackle", "CrossFund"],
  },
  GA4: {
    category: "Analytics & Data",
    howIUseIt:
      "Set up event tracking, goal conversions, and custom reports to measure acquisition and engagement. Used it to attribute traffic sources and evaluate marketing campaign effectiveness. Configured audience segments for remarketing and behavioral targeting.",
    impact:
      "Provided clear visibility into which channels and campaigns drove quality user acquisition. Enabled marketing decisions to be tied directly to product activation and revenue outcomes.",
    usedAt: ["Markopolo AI", "TimeTackle", "AgentLens", "Itenx"],
  },
  SQL: {
    category: "Analytics & Data",
    howIUseIt:
      "Wrote queries for cohort analysis, churn investigation, revenue reporting, and ad-hoc product metrics. Used it to pull raw data from product databases for analysis when analytics tools lacked flexibility. Collaborated with engineering to define data models that supported clean downstream reporting.",
    impact:
      "Enabled self-serve data access for product decisions without waiting on data team support. Improved accuracy of reporting by querying source data directly rather than relying on aggregated dashboards.",
    usedAt: ["TimeTackle", "CrossFund", "Markopolo AI"],
  },
  Python: {
    category: "Analytics & Data",
    howIUseIt:
      "Built data processing scripts, automation tools, and early-stage AI prototypes for rapid experimentation. Used for tasks like data cleaning, API integrations, and batch processing that didn't warrant full engineering effort. Applied it to validate AI feature concepts before committing to production implementation.",
    impact:
      "Accelerated the validation loop between idea and working proof of concept. Allowed product and data work to move forward without blocking the core engineering team.",
    usedAt: ["AgentLens", "Finni AI"],
  },
  "Data Studio": {
    category: "Analytics & Data",
    howIUseIt:
      "Built data visualization and reporting dashboards connected to multiple data sources. Used for marketing attribution, conversion tracking, and executive reporting. Created reusable templates for recurring analytics needs.",
    impact:
      "Reduced time from data request to actionable insight for stakeholders. Enabled consistent reporting across teams with standardized dashboard templates.",
    usedAt: ["TimeTackle", "Markopolo AI"],
  },
  Heap: {
    category: "Analytics & Data",
    howIUseIt:
      "Deployed automatic event tracking to capture user behavior without manual instrumentation. Used it for product analytics, funnel analysis, and user journey mapping. Built reports to understand user behavior patterns across the product.",
    impact:
      "Reduced engineering overhead for analytics implementation by capturing events automatically. Provided comprehensive behavioral data for product insights.",
    usedAt: ["Markopolo AI"],
  },
  Intercom: {
    category: "Customer Facing",
    howIUseIt:
      "Set up in-app messaging campaigns, automated onboarding sequences, and support inbox workflows. Used behavioral triggers to send contextual messages at key moments in the user journey. Maintained help center content and used chat to gather qualitative user feedback.",
    impact:
      "Improved responsiveness to user questions during critical onboarding stages. Reduced support load over time by proactively addressing common friction points through automated messages.",
    usedAt: ["TimeTackle", "Markopolo AI"],
  },
  Zendesk: {
    category: "Customer Facing",
    howIUseIt:
      "Managed customer support ticketing and help desk workflows for support teams. Set up automated routing, macros, and SLA tracking for consistent response times. Used reporting to identify support trends and inform product improvements.",
    impact:
      "Improved support team efficiency with standardized workflows and automation. Provided visibility into support volume and quality for continuous improvement.",
    usedAt: ["TimeTackle", "CrossFund"],
  },
  HubSpot: {
    category: "Customer Facing",
    howIUseIt:
      "Managed B2B sales pipeline, contact records, and automated email nurture sequences. Set up deal stages, task reminders, and activity tracking to keep the sales process consistent. Used reporting to identify where leads were dropping off in the funnel.",
    impact:
      "Improved follow-up consistency and gave the team clear visibility into pipeline health. Helped identify and address the stages of the sales cycle with the highest drop-off rates.",
    usedAt: ["TimeTackle"],
  },
  Loom: {
    category: "Customer Facing",
    howIUseIt:
      "Recorded async video walkthroughs for feature demos, customer onboarding, and internal team handoffs. Used it to communicate complex product context without scheduling synchronous meetings. Shared Loom recordings with customers as part of support and success workflows.",
    impact:
      "Reduced the need for repetitive sync meetings by enabling clear async communication. Improved customer onboarding experience by providing on-demand visual guidance.",
    usedAt: ["TimeTackle", "Markopolo AI"],
  },
  Typeform: {
    category: "Customer Facing",
    howIUseIt:
      "Designed user research surveys, NPS measurement forms, and customer feedback collection flows. Used conversational form design to improve completion rates on longer surveys. Integrated responses with CRM and analytics tools for structured analysis.",
    impact:
      "Made user research more accessible and scalable without requiring dedicated research sessions. Generated actionable insights from customer feedback that directly informed roadmap decisions.",
    usedAt: ["TimeTackle", "CrossFund"],
  },
  Calendly: {
    category: "Customer Facing",
    howIUseIt:
      "Set up scheduling workflows for product demos, customer discovery calls, and user research sessions. Used routing forms to qualify leads before booking time with the right team member. Integrated with CRM to automatically log scheduled meetings as pipeline activities.",
    impact:
      "Removed friction from the booking process and reduced no-show rates for scheduled calls. Freed up team time previously spent on manual scheduling coordination.",
    usedAt: ["TimeTackle", "CrossFund", "Markopolo AI"],
  },
  Crisp: {
    category: "Customer Facing",
    howIUseIt:
      "Deployed live chat for real-time customer support and proactive messaging during user onboarding. Set up automated chat triggers based on user behavior to intervene at high-drop-off moments. Used conversation history to identify recurring support issues and inform product improvements.",
    impact:
      "Improved response times for customer queries at critical points in the user journey. Surfaced patterns in support conversations that led to targeted product and documentation improvements.",
    usedAt: ["TimeTackle"],
  },
  Replit: {
    category: "AI & Automation",
    howIUseIt:
      "Used for rapid prototyping and collaborative coding in the browser. Built and shared AI-powered demos and experiments without local environment setup.",
    impact:
      "Enabled quick validation of coding ideas and AI integrations. Reduced friction for sharing prototypes with stakeholders.",
    usedAt: ["AgentLens", "Finni AI"],
  },
  Perplexity: {
    category: "AI & Automation",
    howIUseIt:
      "Used for research and fact-checking during product development. Leveraged AI-powered search for technical documentation and competitive analysis.",
    impact:
      "Accelerated research cycles for product and technical decisions. Improved accuracy of information gathering for feature planning.",
    usedAt: ["AgentLens", "Markopolo AI"],
  },
  Midjourney: {
    category: "AI & Automation",
    howIUseIt:
      "Generated visual assets for product mockups, marketing materials, and UI concept exploration. Used for rapid iteration on visual design directions.",
    impact:
      "Reduced dependency on design resources for early-stage visual exploration. Enabled faster experimentation with brand and UI aesthetics.",
    usedAt: ["AgentLens", "Finni AI"],
  },
  "Whisper API": {
    category: "AI & Automation",
    howIUseIt:
      "Integrated speech-to-text for transcription of user voice inputs and call recordings. Used for accessibility features and content processing pipelines.",
    impact:
      "Enabled voice-based product interactions and improved accessibility. Automated transcription workflows for user research and support.",
    usedAt: ["AgentLens", "Markopolo AI"],
  },
  "Weights & Biases": {
    category: "AI Research & Evaluation",
    howIUseIt:
      "Used for experiment tracking on AI model evaluations and prompt optimization runs. Logged metrics, hyperparameters, and output samples to compare model performance systematically.",
    impact:
      "Made AI experimentation reproducible and easier to communicate to the team. Reduced time spent on manual experiment logging and comparison.",
    usedAt: ["AgentLens"],
  },
  "Hugging Face": {
    category: "AI & Automation",
    howIUseIt:
      "Used the model hub for exploring open-source models and running inference for prototyping tasks. Leveraged datasets and spaces for benchmarking and rapid experimentation.",
    impact:
      "Enabled cost-effective prototyping using open models before committing to paid APIs. Provided access to a broad range of model architectures for comparison.",
    usedAt: ["AgentLens", "Finni AI"],
  },
  Linear: {
    category: "Product & Design",
    howIUseIt:
      "Used for engineering sprint management and issue tracking with a cleaner workflow than JIRA. Managed feature requests, bug tracking, and release cycles with the team.",
    impact:
      "Improved development velocity by keeping the team focused on clearly scoped sprint goals. Reduced overhead in project management with a more intuitive interface.",
    usedAt: ["AgentLens", "Finni AI"],
  },
  Framer: {
    category: "Product & Design",
    howIUseIt:
      "Built interactive landing pages and marketing sites with no-code tooling. Used for rapid prototyping of marketing experiments without engineering dependency.",
    impact:
      "Reduced time to launch marketing pages from weeks to days. Enabled quick A/B testing of messaging and layouts.",
    usedAt: ["AgentLens", "Finni AI"],
  },
  Maze: {
    category: "Product & Design",
    howIUseIt:
      "Ran unmoderated usability tests on Figma prototypes to validate design decisions early. Used for task completion testing and first-click analysis before development.",
    impact:
      "Caught usability issues before engineering investment, saving rework cycles. Grounded design decisions in real user behavior data.",
    usedAt: ["TimeTackle", "Markopolo AI"],
  },
  Dovetail: {
    category: "Product & Design",
    howIUseIt:
      "Centralized user research notes, interview recordings, and survey data for team-wide synthesis. Used affinity mapping to identify recurring themes across customer conversations.",
    impact:
      "Made qualitative research accessible to the whole team, not just researchers. Improved the quality of insights feeding into roadmap decisions.",
    usedAt: ["TimeTackle", "Markopolo AI"],
  },
  Whimsical: {
    category: "Product & Design",
    howIUseIt:
      "Created flowcharts, wireframes, and mind maps for product planning and documentation. Used for quick visual communication of ideas and processes.",
    impact:
      "Improved clarity of product specifications and user flows. Enabled faster alignment on complex system designs.",
    usedAt: ["TimeTackle", "AgentLens"],
  },
  Looker: {
    category: "Analytics & Data",
    howIUseIt:
      "Built semantic data models and self-serve dashboards for business intelligence. Used LookML for consistent metric definitions across the organization.",
    impact:
      "Enabled stakeholders to explore data without writing SQL. Improved consistency of reporting with centralized metric definitions.",
    usedAt: ["TimeTackle", "Markopolo AI"],
  },
  Segment: {
    category: "Analytics & Data",
    howIUseIt:
      "Set up customer data pipelines routing events to analytics, CRM, and marketing tools from a single source. Managed event schemas and ensured clean data flowing to downstream tools.",
    impact:
      "Eliminated data inconsistencies across tools by maintaining one reliable event source. Reduced engineering effort needed to add new analytics integrations.",
    usedAt: ["Markopolo AI", "TimeTackle"],
  },
  dbt: {
    category: "Analytics & Data",
    howIUseIt:
      "Built and maintained data transformation pipelines for analytics. Used for modeling raw data into clean, documented datasets for reporting and analysis.",
    impact:
      "Improved data quality and consistency for downstream analytics. Enabled version-controlled, testable data transformations.",
    usedAt: ["TimeTackle", "Markopolo AI"],
  },
  BigQuery: {
    category: "Analytics & Data",
    howIUseIt:
      "Ran large-scale analytics queries on product and user data. Used for cohort analysis, funnel reporting, and ad-hoc data exploration.",
    impact:
      "Enabled analysis of large datasets without infrastructure management. Reduced query times for complex analytics workloads.",
    usedAt: ["TimeTackle", "Markopolo AI"],
  },
  Pendo: {
    category: "Customer Facing",
    howIUseIt:
      "Used for in-app guidance, feature adoption tracking, and NPS survey delivery. Set up product tours for new feature launches to drive activation.",
    impact:
      "Improved feature discovery and adoption rates through contextual in-app communication. Provided product usage data that complemented behavioral analytics tools.",
    usedAt: ["Markopolo AI", "TimeTackle"],
  },
  Gong: {
    category: "Customer Facing",
    howIUseIt:
      "Reviewed sales call recordings to extract customer pain points and objections for product insights. Used call analysis to identify recurring themes that informed roadmap priorities.",
    impact:
      "Bridged the gap between sales conversations and product decisions with real customer language. Improved the quality of product discovery by grounding it in actual buyer conversations.",
    usedAt: ["TimeTackle"],
  },
  Chorus: {
    category: "Customer Facing",
    howIUseIt:
      "Analyzed sales conversations for deal intelligence and coaching. Used conversation insights to understand buyer sentiment and improve sales messaging.",
    impact:
      "Provided visibility into what resonated with customers during sales cycles. Informed product messaging based on actual buyer language.",
    usedAt: ["TimeTackle"],
  },
  Drift: {
    category: "Customer Facing",
    howIUseIt:
      "Deployed conversational marketing and sales chatbots for lead qualification. Used for real-time engagement with website visitors and meeting scheduling.",
    impact:
      "Improved lead response times and qualification efficiency. Enabled 24/7 engagement with prospects without manual follow-up.",
    usedAt: ["Markopolo AI"],
  },
  Ragas: {
    category: "AI Research & Evaluation",
    howIUseIt:
      "Evaluated RAG pipeline quality using automated metrics for faithfulness, relevance, and context recall. Used to benchmark changes to retrieval and generation components systematically.",
    impact:
      "Provided objective quality signals for AI output improvements beyond manual review. Enabled faster iteration on RAG configurations with confidence.",
    usedAt: ["AgentLens"],
  },
  Promptfoo: {
    category: "AI Research & Evaluation",
    howIUseIt:
      "Built automated prompt evaluation suites to test prompts against edge cases and regressions. Used to compare prompt variants systematically before deploying changes.",
    impact:
      "Reduced prompt-related production issues by catching failures in a test environment first. Made prompt engineering more rigorous and less dependent on manual spot-checking.",
    usedAt: ["AgentLens", "Finni AI"],
  },
  Evals: {
    category: "AI Research & Evaluation",
    howIUseIt:
      "Used evaluation frameworks to systematically test AI outputs against defined criteria. Built test suites for regression detection and quality benchmarking.",
    impact:
      "Improved confidence in AI deployments with structured quality gates. Reduced manual testing overhead for AI feature releases.",
    usedAt: ["AgentLens"],
  },
  "OpenAI Evals": {
    category: "AI Research & Evaluation",
    howIUseIt:
      "Leveraged OpenAI's evaluation framework for benchmarking LLM outputs. Used for comparing model versions and prompt variations on standardized tasks.",
    impact:
      "Provided reproducible benchmarks for AI quality improvements. Enabled data-driven decisions on model and prompt changes.",
    usedAt: ["AgentLens", "Finni AI"],
  },
  Braintrust: {
    category: "AI Research & Evaluation",
    howIUseIt:
      "Used for AI evaluation and experiment tracking. Built evaluation datasets and ran systematic comparisons of model and prompt performance.",
    impact:
      "Improved rigor in AI development with structured evaluation workflows. Enabled team alignment on quality standards for AI features.",
    usedAt: ["AgentLens"],
  },
  "Arize AI": {
    category: "AI Research & Evaluation",
    howIUseIt:
      "Used for production LLM monitoring and drift detection on agent outputs. Set up alerts for degraded model performance and tracked embedding quality over time.",
    impact:
      "Improved confidence in production AI behavior with systematic monitoring. Caught output quality regressions before they affected users at scale.",
    usedAt: ["AgentLens"],
  },
  GitHub: {
    category: "Dev & Infrastructure",
    howIUseIt:
      "Managed version control, code reviews, and CI/CD workflows across all projects. Used for issue tracking, project boards, and collaboration with engineering teams.",
    impact:
      "Enabled consistent development workflows and code quality through structured review processes. Centralized project visibility and documentation.",
    usedAt: ["AgentLens", "Finni AI", "TimeTackle"],
  },
  Vercel: {
    category: "Dev & Infrastructure",
    howIUseIt:
      "Deployed all Next.js frontend projects with automatic CI/CD from GitHub. Used preview deployments for stakeholder reviews before merging to production.",
    impact:
      "Reduced deployment friction and enabled faster feedback cycles on UI changes. Made frontend shipping a one-step process integrated directly with the development workflow.",
    usedAt: ["AgentLens", "Finni AI", "Portfolio"],
  },
  Railway: {
    category: "Dev & Infrastructure",
    howIUseIt:
      "Used for deploying Node.js backend services with minimal infrastructure configuration. Managed environment variables, service scaling, and deployment pipelines through a simple interface.",
    impact:
      "Enabled backend deployment without DevOps expertise, keeping the team focused on product. Reduced infrastructure maintenance overhead for early-stage services.",
    usedAt: ["AgentLens"],
  },
  Supabase: {
    category: "Dev & Infrastructure",
    howIUseIt:
      "Used as the backend database and auth layer for rapid product prototyping. Leveraged real-time subscriptions and row-level security for user data management.",
    impact:
      "Reduced backend setup time significantly compared to building from scratch. Enabled small teams to ship full-stack features without a dedicated backend engineer.",
    usedAt: ["AgentLens", "Finni AI"],
  },
  Firebase: {
    category: "Dev & Infrastructure",
    howIUseIt:
      "Used for authentication, real-time database, and cloud functions in early product builds. Leveraged for rapid prototyping and mobile backend needs.",
    impact:
      "Accelerated development of real-time and auth-dependent features. Reduced infrastructure complexity for MVP launches.",
    usedAt: ["TimeTackle", "Markopolo AI"],
  },
  Docker: {
    category: "Dev & Infrastructure",
    howIUseIt:
      "Containerized applications for consistent development and deployment environments. Used for local development parity and production deployments.",
    impact:
      "Eliminated environment-related bugs with reproducible builds. Simplified deployment processes across different hosting environments.",
    usedAt: ["AgentLens", "Markopolo AI"],
  },
  AWS: {
    category: "Dev & Infrastructure",
    howIUseIt:
      "Used EC2, S3, Lambda, and other services for backend infrastructure. Managed cloud resources for production workloads and data storage.",
    impact:
      "Provided scalable infrastructure for production applications. Enabled cost-effective resource management for growing products.",
    usedAt: ["TimeTackle", "Markopolo AI"],
  },
  Retool: {
    category: "Dev & Infrastructure",
    howIUseIt:
      "Built internal tools and admin dashboards for operations and support teams. Used for CRM-like interfaces, data management, and workflow automation.",
    impact:
      "Enabled non-engineers to build and maintain internal tools. Reduced engineering backlog for operational tooling requests.",
    usedAt: ["TimeTackle", "Markopolo AI"],
  },
};

const skillCategories = [
  {
    title: "AI & Automation",
    skills: [
      "LangChain",
      "OpenAI API",
      "Claude API",
      "Cursor",
      "n8n",
      "Zapier",
      "Make",
      "AutoGen",
      "CrewAI",
      "LangSmith",
      "Replit",
      "Perplexity",
      "Midjourney",
      "Whisper API",
      "Weights & Biases",
      "Hugging Face",
      "LangSmith",
    ],
  },
  {
    title: "Product & Design",
    skills: [
      "Figma",
      "Mixpanel",
      "Amplitude",
      "PostHog",
      "Hotjar",
      "JIRA",
      "Productboard",
      "ClickUp",
      "Miro",
      "Notion",
      "Linear",
      "Framer",
      "Maze",
      "Dovetail",
      "Whimsical",
      "Loom",
    ],
  },
  {
    title: "Analytics & Data",
    skills: [
      "Tableau",
      "GA4",
      "SQL",
      "Python",
      "Data Studio",
      "Heap",
      "Looker",
      "Segment",
      "dbt",
      "BigQuery",
    ],
  },
  {
    title: "Customer Facing",
    skills: [
      "Intercom",
      "Zendesk",
      "HubSpot",
      "Notion",
      "Loom",
      "Typeform",
      "Calendly",
      "Crisp",
      "Pendo",
      "Gong",
      "Chorus",
      "Drift",
    ],
  },
  {
    title: "AI Research & Evaluation",
    skills: [
      "Weights & Biases",
      "Ragas",
      "LangSmith",
      "Promptfoo",
      "Evals",
      "OpenAI Evals",
      "Braintrust",
      "Arize AI",
    ],
  },
  {
    title: "Dev & Infrastructure",
    skills: [
      "GitHub",
      "Vercel",
      "Railway",
      "Supabase",
      "Firebase",
      "Docker",
      "AWS",
      "Retool",
    ],
  },
];

export default function Skills() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="font-mono text-accent text-2xl sm:text-3xl mb-12 text-center">
        &lt;skills_tools /&gt;
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-card border border-[rgba(0,201,167,0.3)] rounded-xl hover:border-[rgba(0,201,167,0.6)] hover:shadow-[0_0_20px_rgba(0,201,167,0.4),0_0_60px_rgba(0,201,167,0.15)] hover:-translate-y-1 transition-all duration-300 overflow-visible"
            >
              <h3 className="font-mono font-semibold text-accent mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const details = toolDetails[skill];
                  return (
                    <button
                      key={skill}
                      onClick={() => setOpenModal(skill)}
                      className="px-3 py-1 bg-background rounded-lg text-gray-400 text-sm hover:text-accent hover:border-accent/50 border border-transparent cursor-pointer transition-colors"
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {openModal && toolDetails[openModal] && (
        <Modal isOpen={!!openModal} onClose={() => setOpenModal(null)}>
          <ModalCloseButton onClose={() => setOpenModal(null)} />
          <h3 className="font-mono font-bold text-2xl text-white mb-2">{openModal}</h3>
          <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-mono mb-6">
            {toolDetails[openModal].category}
          </span>
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">How I use it</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {toolDetails[openModal].howIUseIt}
          </p>
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Impact</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {toolDetails[openModal].impact}
          </p>
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Used at</p>
          <div className="flex flex-wrap gap-2">
            {toolDetails[openModal].usedAt.map((company) => (
              <span
                key={company}
                className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-mono"
              >
                {company}
              </span>
            ))}
          </div>
        </Modal>
      )}
    </section>
  );
}
