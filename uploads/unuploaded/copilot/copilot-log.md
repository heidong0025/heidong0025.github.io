2026-03-29T17:08:02.361Z INFO Copilot Plus: Initializing semantic index event listeners
2026-03-29T17:08:02.361Z INFO VaultDataManager: Initializing with vault event listeners
2026-03-29T17:08:02.363Z INFO Setting model to MiniMax-M2.7|3rd party (openai-format)
2026-03-29T17:08:02.412Z INFO Loaded existing chunked semantic index database from disk.
2026-03-29T17:08:02.618Z INFO Initializing SystemPromptManager
2026-03-29T17:08:02.618Z INFO No legacy userSystemPrompt to migrate
2026-03-29T17:08:17.268Z INFO [ChatManager] Sending message: "123"
2026-03-29T17:08:17.268Z INFO [MessageRepository] Added message with ID: msg-1774804097257-i45gapkjn
2026-03-29T17:08:17.268Z INFO [UserMemoryManager] Recent Conversations file not found, skipping memory load
2026-03-29T17:08:17.268Z INFO [UserMemoryManager] Saved Memories file not found, skipping saved memory load
2026-03-29T17:08:17.269Z INFO [ContextManager] Processing context for message msg-1774804097257-i45gapkjn
2026-03-29T17:08:17.277Z INFO [ContextManager] Successfully processed context for message msg-1774804097257-i45gapkjn
2026-03-29T17:08:17.277Z INFO [PromptContextEngine] Built envelope for message:msg-1774804097257-i45gapkjn {"L1_SYSTEM":"18632c192275773ea338b5ae2cd96c5ae3bf2b48e4db3489f4d59868ad491ad2","L2_PREVIOUS":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","L3_TURN":"0fe4530643f2472602849ba942138f9dd24d2821e54515fc491b8c8f08ef9557","L4_STRIP":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","L5_USER":"a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"}
2026-03-29T17:08:17.277Z INFO [MessageRepository] Updated processed text for message msg-1774804097257-i45gapkjn
2026-03-29T17:08:17.277Z INFO [ChatManager] Successfully sent message msg-1774804097257-i45gapkjn
2026-03-29T17:08:17.278Z INFO Step 0: Initial user message:\n 123\n&lt;active_note&gt;\n&lt;title&gt;copilot-log&lt;/title&gt;\n&lt;path&gt;copilot/copilot-log.md&lt;/path&gt;\n&lt;ctime&gt;2026-03-29T17:03:24.077Z&lt;/ctime&gt;\n&lt;mtime&gt;2026-03-29T17:08:09.375Z&lt;/mtime&gt;\n&lt;content&gt;\n2026-03-29T17:08:02.361Z INFO Copilot Plus: Initializing semantic index event listeners\n2026-03-29T17:08:02.361Z INFO VaultDataManager: Initializing with vault event listeners\n2026-03-29T17:08:02.363Z INFO Setting model to MiniMax-M2.7|3rd party (openai-format)\n2026-03-29T17:08:02.412Z INFO Loaded existing chunked semantic index database from disk.\n2026-03-29T17:08:02.618Z INFO Initializing SystemPromptManager\n2026-03-29T17:08:02.618Z INFO No legacy userSystemPrompt to migrate\n## Settings\n```json\n{\n  "userId": "6410398c-845c-4477-a9d4-e10fba605424",\n  "isPlusUser": false,\n  "amazonBedrockRegion": "",\n  "githubCopilotAccessToken": "",\n  "githubCopilotToken": "",\n  "githubCopilotTokenExpiresAt": 0,\n  "defaultChainType": "llm_chain",\n  "defaultModelKey": "MiniMax-M2.7|3rd party (openai-format)",\n  "embeddingModelKey": "Qwen/Qwen3-Embedding-0.6B|3rd party (openai-format)",\n  "temperature": 0.1,\n  "maxTokens": 6000,\n  "contextTurns": 15,\n  "userSystemPrompt": "",\n  "openAIProxyBaseUrl": "",\n  "openAIEmbeddingProxyBaseUrl": "",\n  "stream": true,\n  "defaultSaveFolder": "copilot/copilot-conversations",\n  "defaultConversationTag": "copilot-conversation",\n  "autosaveChat": true,\n  "generateAIChatTitleOnSave": true,\n  "autoAddActiveContentToContext": true,\n  "defaultOpenArea": "view",\n  "defaultSendShortcut": "enter",\n  "customPromptsFolder": "copilot/copilot-custom-prompts",\n  "indexVaultToVectorStore": "ON MODE SWITCH",\n  "qaExclusions": "copilot",\n  "qaInclusions": "",\n  "chatNoteContextPath": "",\n  "chatNoteContextTags": [],\n  "enableIndexSync": true,\n  "debug": true,\n  "enableEncryption": false,\n  "maxSourceChunks": 17,\n  "enableInlineCitations": true,\n  "activeModels": [\n    {\n      "name": "copilot-plus-flash",\n      "provider": "copilot-plus",\n      "enabled": true,\n      "isBuiltIn": true,\n      "core": true,\n      "plusExclusive": true,\n      "projectEnabled": false,\n      "capabilities": [\n        "vision"\n      ]\n    },\n    {\n      "name": "google/gemini-2.5-flash-lite",\n      "provider": "openrouterai",\n      "enabled": false,\n      "isBuiltIn": true,\n      "core": true,\n      "projectEnabled": true,\n      "capabilities": [\n        "vision"\n      ]\n    },\n    {\n      "name": "google/gemini-2.5-flash",\n      "provider": "openrouterai",\n      "enabled": true,\n      "isBuiltIn": true,\n      "core": true,\n      "projectEnabled": true,\n      "capabilities": [\n        "vision"\n      ]\n    },\n    {\n      "name": "google/gemini-2.5-pro",\n      "provider": "openrouterai",\n      "enabled": false,\n      "isBuiltIn": true,\n      "core": true,\n      "projectEnabled": true,\n      "capabilities": [\n        "vision"\n      ]\n    },\n    {\n      "name": "gpt-5",\n      "provider": "openai",\n      "enabled": false,\n      "isBuiltIn": true,\n      "core": true,\n      "capabilities": [\n        "vision"\n      ]\n    },\n    {\n      "name": "gpt-5-mini",\n      "provider": "openai",\n      "enabled": false,\n      "isBuiltIn": true,\n      "core": true,\n      "capabilities": [\n        "vision"\n      ]\n    },\n    {\n      "name": "gpt-4.1",\n      "provider": "openai",\n      "enabled": false,\n      "isBuiltIn": true,\n      "core": true,\n      "projectEnabled": true,\n      "capabilities": [\n        "vision"\n      ]\n    },\n    {\n      "name": "gpt-4.1-mini",\n      "provider": "openai",\n      "enabled": false,\n      "isBuiltIn": true,\n      "core": true,\n      "projectEnabled": true,\n      "capabilities": [\n        "vision"\n      ]\n    },\n    {\n      "name": "deepseek-ai/DeepSeek-V3.2",\n      "provider": "3rd party (openai-format)",\n      "enabled": true,\n      "baseUrl": "https://api.siliconflow.cn/v1",\n      "isEmbeddingModel": false,\n      "stream": true,\n      "maxTokens": 5500,\n      "displayName": "DeepSeek-V3.2",\n      "capabilities": [\n        "reasoning"\n      ]\n    },\n    {\n      "name": "zai-org/GLM-4.6V",\n      "provider": "3rd party (openai-format)",\n      "enabled": true,\n      "baseUrl": "https://api.siliconflow.cn/v1",\n      "isEmbeddingModel": false,\n      "stream": true,\n      "maxTokens": 5500,\n      "displayName": "GLM-4.6V",\n      "capabilities": [\n        "reasoning"\n      ]\n    },\n    {\n      "name": "qwen/qwen3.5-122b-a10b",\n      "provider": "3rd party (openai-format)",\n      "enabled": false,\n      "isBuiltIn": false,\n      "baseUrl": "https://integrate.api.nvidia.com/v1",\n      "isEmbeddingModel": false,\n      "capabilities": [\n        "reasoning"\n      ],\n      "stream": true,\n      "displayName": "qwen/qwen3.5-122b-a10b"\n    },\n    {\n      "name": "MiniMax-M2.7",\n      "provider": "3rd party (openai-format)",\n      "enabled": true,\n      "isBuiltIn": false,\n      "baseUrl": "https://api.minimaxi.com/v1",\n      "isEmbeddingModel": false,\n      "capabilities": [\n        "reasoning"\n      ],\n      "stream": true,\n      "displayName": "MiniMax-M2.7",\n      "maxTokens": 15200\n    }\n  ],\n  "activeEmbeddingModels": [\n    {\n      "name": "copilot-plus-small",\n      "provider": "copilot-plus",\n      "enabled": true,\n      "isBuiltIn": true,\n      "isEmbeddingModel": true,\n      "core": true,\n      "plusExclusive": true\n    },\n    {\n      "name": "copilot-plus-large",\n      "provider": "copilot-plus-jina",\n      "enabled": true,\n      "isBuiltIn": true,\n      "isEmbeddingModel": true,\n      "core": true,\n      "plusExclusive": true,\n      "believerExclusive": true,\n      "dimensions": 1024\n    },\n    {\n      "name": "copilot-plus-multilingual",\n      "provider": "copilot-plus-jina",\n      "enabled": true,\n      "isBuiltIn": true,\n      "isEmbeddingModel": true,\n      "core": true,\n      "plusExclusive": true,\n      "dimensions": 512\n    },\n    {\n      "name": "text-embedding-3-small",\n      "provider": "openai",\n      "enabled": true,\n      "isBuiltIn": true,\n      "isEmbeddingModel": true,\n      "core": true\n    },\n    {\n      "name": "gemini-embedding-001",\n      "provider": "google",\n      "enabled": true,\n      "isBuiltIn": true,\n      "isEmbeddingModel": true,\n      "core": true\n    },\n    {\n      "name": "Qwen/Qwen3-Embedding-0.6B",\n      "provider": "siliconflow",\n      "enabled": true,\n      "isBuiltIn": true,\n      "isEmbeddingModel": true,\n      "core": true,\n      "baseUrl": "https://api.siliconflow.com/v1"\n    },\n    {\n      "name": "Qwen/Qwen3-Embedding-0.6B",\n      "provider": "3rd party (openai-format)",\n      "enabled": true,\n      "baseUrl": "https://api.siliconflow.cn/v1",\n      "isEmbeddingModel": true,\n      "enableCors": false,\n      "displayName": "Qwen3-Embedding-0.6B"\n    },\n    {\n      "name": "Qwen/Qwen3-Embedding-4B",\n      "provider": "3rd party (openai-format)",\n      "enabled": true,\n      "baseUrl": "https://api.siliconflow.cn/v1",\n      "isEmbeddingModel": true,\n      "enableCors": false,\n      "displayName": "Qwen3-Embedding-4B"\n    },\n    {\n      "name": "Qwen/Qwen3-Embedding-8B",\n      "provider": "3rd party (openai-format)",\n      "enabled": true,\n      "baseUrl": "https://api.siliconflow.cn/v1",\n      "isEmbeddingModel": true,\n      "enableCors": true,\n      "displayName": "Qwen3-Embedding-8B"\n    }\n  ],\n  "embeddingRequestsPerMin": 60,\n  "embeddingBatchSize": 16,\n  "disableIndexOnMobile": true,\n  "showSuggestedPrompts": true,\n  "showRelevantNotes": true,\n  "numPartitions": 1,\n  "lexicalSearchRamLimit": 1000,\n  "promptUsageTimestamps": {},\n  "promptSortStrategy": "timestamp",\n  "chatHistorySortStrategy": "recent",\n  "projectListSortStrategy": "recent",\n  "defaultConversationNoteName": "{$topic}@{$date}_{$time}",\n  "inlineEditCommands": [],\n  "projectList": [],\n  "lastDismissed … [truncated 1008 chars]
2026-03-29T17:08:17.278Z INFO [LLMChainRunner] Using envelope-based context
2026-03-29T17:08:17.280Z INFO Final Request to AI:\n [{"role":"system","content":"You are Obsidian Copilot, a helpful assistant that integrates AI to Obsidian note-taking.\n  1. Never mention that you do not have access to something. Always rely on the user provided context.\n  2. Always answer to the best of your knowledge. If you are unsure about something, say so and ask the user to provide more context.\n  3. If the user mentions \"note\", it most likely means an Obsidian note in the vault, not the generic meaning of a note.\n  4. If the user mentions \"@vault\", it means the user wants you to search the Obsidian vault for information relevant to the query. The search results will be provided to you in the context along with the user query, read it carefully and answer the question based on the information provided. If there's no relevant information in the vault, just say so.\n  5. If the user mentions any other tool with the @ symbol, check the context for their results. If nothing is found, just ignore the @ symbol in the query.\n  6. Always use $'s instead of \\[ etc. for LaTeX equations.\n  7. When showing note titles, use [[title]] format and do not wrap them in ` `.\n  8. When showing **Obsidian internal** image links, use ![[link]] format and do not wrap them in ` `.\n  9. When showing **web** image links, use ![link](url) format and do not wrap them in ` `.\n  10. When generating a table, format as github markdown tables, however, for table headings, immediately add ' |' after the table heading.\n  11. Always respond in the language of the user's query.\n  12. Do NOT mention the additional context provided such as getCurrentTime and getTimeRangeMs if it's irrelevant to the user message.\n  13. If the user mentions \"tags\", it most likely means tags in Obsidian note properties.\n  14. YouTube URLs: If the user provides YouTube URLs in their message, transcriptions will be automatically fetched and provided to you. You don't need to do anything special - just use the transcription content if available.\n  15. For markdown lists, always use '- ' (hyphen followed by exactly one space) for bullet points, with no leading spaces before the hyphen. Never use '*' (asterisk) for bullets."},{"role":"user","content":[{"type":"text","text":"&lt;active_note&gt;\n&lt;title&gt;copilot-log&lt;/title&gt;\n&lt;path&gt;copilot/copilot-log.md&lt;/path&gt;\n&lt;ctime&gt;2026-03-29T17:03:24.077Z&lt;/ctime&gt;\n&lt;mtime&gt;2026-03-29T17:08:09.375Z&lt;/mtime&gt;\n&lt;content&gt;\n2026-03-29T17:08:02.361Z INFO Copilot Plus: Initializing semantic index event listeners\n2026-03-29T17:08:02.361Z INFO VaultDataManager: Initializing with vault event listeners\n2026-03-29T17:08:02.363Z INFO Setting model to MiniMax-M2.7|3rd party (openai-format)\n2026-03-29T17:08:02.412Z INFO Loaded existing chunked semantic index database from disk.\n2026-03-29T17:08:02.618Z INFO Initializing SystemPromptManager\n2026-03-29T17:08:02.618Z INFO No legacy userSystemPrompt to migrate\n\n## Settings\n```json\n{\n  \"userId\": \"6410398c-845c-4477-a9d4-e10fba605424\",\n  \"isPlusUser\": false,\n  \"amazonBedrockRegion\": \"\",\n  \"githubCopilotAccessToken\": \"\",\n  \"githubCopilotToken\": \"\",\n  \"githubCopilotTokenExpiresAt\": 0,\n  \"defaultChainType\": \"llm_chain\",\n  \"defaultModelKey\": \"MiniMax-M2.7|3rd party (openai-format)\",\n  \"embeddingModelKey\": \"Qwen/Qwen3-Embedding-0.6B|3rd party (openai-format)\",\n  \"temperature\": 0.1,\n  \"maxTokens\": 6000,\n  \"contextTurns\": 15,\n  \"userSystemPrompt\": \"\",\n  \"openAIProxyBaseUrl\": \"\",\n  \"openAIEmbeddingProxyBaseUrl\": \"\",\n  \"stream\": true,\n  \"defaultSaveFolder\": \"copilot/copilot-conversations\",\n  \"defaultConversationTag\": \"copilot-conversation\",\n  \"autosaveChat\": true,\n  \"generateAIChatTitleOnSave\": true,\n  \"autoAddActiveContentToContext\": true,\n  \"defaultOpenArea\": \"view\",\n  \"defaultSendShortcut\": \"enter\",\n  \"customPromptsFolder\": \"copilot/copilot-custom-prompts\",\n  \"indexVaultToVectorStore\": \"ON MODE SWITCH\",\n  \"qaExclusions\": \"copilot\",\n  \"qaInclusions\": \"\",\n  \"chatNoteContextPath\": \"\",\n  \"chatNoteContextTags\": [],\n  \"enableIndexSync\": true,\n  \"debug\": true,\n  \"enableEncryption\": false,\n  \"maxSourceChunks\": 17,\n  \"enableInlineCitations\": true,\n  \"activeModels\": [\n    {\n      \"name\": \"copilot-plus-flash\",\n      \"provider\": \"copilot-plus\",\n      \"enabled\": true,\n      \"isBuiltIn\": true,\n      \"core\": true,\n      \"plusExclusive\": true,\n      \"projectEnabled\": false,\n      \"capabilities\": [\n        \"vision\"\n      ]\n    },\n    {\n      \"name\": \"google/gemini-2.5-flash-lite\",\n      \"provider\": \"openrouterai\",\n      \"enabled\": false,\n      \"isBuiltIn\": true,\n      \"core\": true,\n      \"projectEnabled\": true,\n      \"capabilities\": [\n        \"vision\"\n      ]\n    },\n    {\n      \"name\": \"google/gemini-2.5-flash\",\n      \"provider\": \"openrouterai\",\n      \"enabled\": true,\n      \"isBuiltIn\": true,\n      \"core\": true,\n      \"projectEnabled\": true,\n      \"capabilities\": [\n        \"vision\"\n      ]\n    },\n    {\n      \"name\": \"google/gemini-2.5-pro\",\n      \"provider\": \"openrouterai\",\n      \"enabled\": false,\n      \"isBuiltIn\": true,\n      \"core\": true,\n      \"projectEnabled\": true,\n      \"capabilities\": [\n        \"vision\"\n      ]\n    },\n    {\n      \"name\": \"gpt-5\",\n      \"provider\": \"openai\",\n      \"enabled\": false,\n      \"isBuiltIn\": true,\n      \"core\": true,\n      \"capabilities\": [\n        \"vision\"\n      ]\n    },\n    {\n      \"name\": \"gpt-5-mini\",\n      \"provider\": \"openai\",\n      \"enabled\": false,\n      \"isBuiltIn\": true,\n      \"core\": true,\n      \"capabilities\": [\n        \"vision\"\n      ]\n    },\n    {\n      \"name\": \"gpt-4.1\",\n      \"provider\": \"openai\",\n      \"enabled\": false,\n      \"isBuiltIn\": true,\n      \"core\": true,\n      \"projectEnabled\": true,\n      \"capabilities\": [\n        \"vision\"\n      ]\n    },\n    {\n      \"name\": \"gpt-4.1-mini\",\n      \"provider\": \"openai\",\n      \"enabled\": false,\n      \"isBuiltIn\": true,\n      \"core\": true,\n      \"projectEnabled\": true,\n      \"capabilities\": [\n        \"vision\"\n      ]\n    },\n    {\n      \"name\": \"deepseek-ai/DeepSeek-V3.2\",\n      \"provider\": \"3rd party (openai-format)\",\n      \"enabled\": true,\n      \"baseUrl\": \"https://api.siliconflow.cn/v1\",\n      \"isEmbeddingModel\": false,\n      \"stream\": true,\n      \"maxTokens\": 5500,\n      \"displayName\": \"DeepSeek-V3.2\",\n      \"capabilities\": [\n        \"reasoning\"\n      ]\n    },\n    {\n      \"name\": \"zai-org/GLM-4.6V\",\n      \"provider\": \"3rd party (openai-format)\",\n      \"enabled\": true,\n      \"baseUrl\": \"https://api.siliconflow.cn/v1\",\n      \"isEmbeddingModel\": false,\n      \"stream\": true,\n      \"maxTokens\": 5500,\n      \"displayName\": \"GLM-4.6V\",\n      \"capabilities\": [\n        \"reasoning\"\n      ]\n    },\n    {\n      \"name\": \"qwen/qwen3.5-122b-a10b\",\n      \"provider\": \"3rd party (openai-format)\",\n      \"enabled\": false,\n      \"isBuiltIn\": false,\n      \"baseUrl\": \"https://integrate.api.nvidia.com/v1\",\n      \"isEmbeddingModel\": false,\n      \"capabilities\": [\n        \"reasoning\"\n      ],\n      \"stream\": true,\n      \"displayName\": \"qwen/qwen3.5-122b-a10b\"\n    },\n    {\n      \"name\": \"MiniMax-M2.7\",\n      \"provider\": \"3rd party (openai-format)\",\n      \"enabled\": true,\n      \"isBuiltIn\": false,\n      \"baseUrl\": \"https://api.minimaxi.com/v1\",\n      \"isEmbeddingModel\": false,\n      \"capabilities\": [\n        \"reasoning\"\n      ],\n      \"stream\": true,\n      \"displayName\": \"MiniMax-M2.7\",\n      \"maxTokens\": 15200\n    }\n  ],\n  \"activeEmbeddingModels\": [\n    {\n      \"name\": \"copilot-plus-small\",\n      \"provider\": \"copilot-plus\",\n      \"enabled\": true,\n      \"isBuiltIn\": … [truncated 3944 chars]
2026-03-29T17:08:17.291Z INFO [ChatPersistenceManager] Created new chat file: copilot/copilot-conversations/123@20260330_010817.md
2026-03-29T17:08:27.514Z ERROR [ChatPersistenceManager] Error generating AI topic: Connection error.\nmore message: Failed to fetch\nError: Connection error.\n    at bn.makeRequest (plugin:copilot:402:3632)\n    at async eval (plugin:copilot:410:24006)\n    at async hQ (plugin:copilot:66:24134)\n    at async i (plugin:copilot:65:7354)
2026-03-29T17:08:28.427Z ERROR Error during LLM invocation: Connection error.\nmore message: Failed to fetch
2026-03-29T17:08:28.427Z ERROR Connection error.\nmore message: Failed to fetch
2026-03-29T17:08:28.428Z INFO [MessageRepository] Added message with ID: msg-8b614c0a-42ec-4bc8-8474-36f637fd004f
2026-03-29T17:08:28.428Z INFO Chat memory updated:\n {"turns":2}
2026-03-29T17:08:28.428Z INFO Final AI response (truncated):\n \n&lt;errorChunk&gt;Connection error.\nmore message: Failed to fetch&lt;/errorChunk&gt;
2026-03-29T17:08:28.438Z INFO [ChatPersistenceManager] Updated existing chat file: copilot/copilot-conversations/123@20260330_010817.md
2026-03-29T17:08:40.542Z ERROR [ChatPersistenceManager] Error generating AI topic: Connection error.\nmore message: Failed to fetch\nError: Connection error.\n    at bn.makeRequest (plugin:copilot:402:3632)\n    at async eval (plugin:copilot:410:24006)\n    at async hQ (plugin:copilot:66:24134)\n    at async i (plugin:copilot:65:7354)
### Prompt — 2026-03-29T17:08:17.279Z

**Actual Messages Sent to LLM:**

```json
[
  {
    "role": "system",
    "content": "You are Obsidian Copilot, a helpful assistant that integrates AI to Obsidian note-taking.\n  1. Never mention that you do not have access to something. Always rely on the user provided context.\n  2. Always answer to the best of your knowledge. If you are unsure about something, say so and ask the user to provide more context.\n  3. If the user mentions \"note\", it most likely means an Obsidian note in the vault, not the generic meaning of a note.\n  4. If the user mentions \"@vault\", it means the user wants you to search the Obsidian vault for information relevant to the query. The search results will be provided to you in the context along with the user query, read it carefully and answer the question based on the information provided. If there's no relevant information in the vault, just say so.\n  5. If the user mentions any other tool with the @ symbol, check the context for their results. If nothing is found, just ignore the @ symbol in the query.\n  6. Always use $'s instead of \\[ etc. for LaTeX equations.\n  7. When showing note titles, use [[title]] format and do not wrap them in ` `.\n  8. When showing **Obsidian internal** image links, use ![[link]] format and do not wrap them in ` `.\n  9. When showing **web** image links, use ![link](url) format and do not wrap them in ` `.\n  10. When generating a table, format as github markdown tables, however, for table headings, immediately add ' |' after the table heading.\n  11. Always respond in the language of the user's query.\n  12. Do NOT mention the additional context provided such as getCurrentTime and getTimeRangeMs if it's irrelevant to the user message.\n  13. If the user mentions \"tags\", it most likely means tags in Obsidian note properties.\n  14. YouTube URLs: If the user provides YouTube URLs in their message, transcriptions will be automatically fetched and provided to you. You don't need to do anything special - just use the transcription content if available.\n  15. For markdown lists, always use '- ' (hyphen followed by exactly one space) for bullet points, with no leading spaces before the hyphen. Never use '*' (asterisk) for bullets."
  },
  {
    "role": "user",
    "content": [
      {
        "type": "text",
        "text": "<active_note>\n<title>copilot-log</title>\n<path>copilot/copilot-log.md</path>\n<ctime>2026-03-29T17:03:24.077Z</ctime>\n<mtime>2026-03-29T17:08:09.375Z</mtime>\n<content>\n2026-03-29T17:08:02.361Z INFO Copilot Plus: Initializing semantic index event listeners\n2026-03-29T17:08:02.361Z INFO VaultDataManager: Initializing with vault event listeners\n2026-03-29T17:08:02.363Z INFO Setting model to MiniMax-M2.7|3rd party (openai-format)\n2026-03-29T17:08:02.412Z INFO Loaded existing chunked semantic index database from disk.\n2026-03-29T17:08:02.618Z INFO Initializing SystemPromptManager\n2026-03-29T17:08:02.618Z INFO No legacy userSystemPrompt to migrate\n\n## Settings\n```json\n{\n  \"userId\": \"6410398c-845c-4477-a9d4-e10fba605424\",\n  \"isPlusUser\": false,\n  \"amazonBedrockRegion\": \"\",\n  \"githubCopilotAccessToken\": \"\",\n  \"githubCopilotToken\": \"\",\n  \"githubCopilotTokenExpiresAt\": 0,\n  \"defaultChainType\": \"llm_chain\",\n  \"defaultModelKey\": \"MiniMax-M2.7|3rd party (openai-format)\",\n  \"embeddingModelKey\": \"Qwen/Qwen3-Embedding-0.6B|3rd party (openai-format)\",\n  \"temperature\": 0.1,\n  \"maxTokens\": 6000,\n  \"contextTurns\": 15,\n  \"userSystemPrompt\": \"\",\n  \"openAIProxyBaseUrl\": \"\",\n  \"openAIEmbeddingProxyBaseUrl\": \"\",\n  \"stream\": true,\n  \"defaultSaveFolder\": \"copilot/copilot-conversations\",\n  \"defaultConversationTag\": \"copilot-conversation\",\n  \"autosaveChat\": true,\n  \"generateAIChatTitleOnSave\": true,\n  \"autoAddActiveContentToContext\": true,\n  \"defaultOpenArea\": \"view\",\n  \"defaultSendShortcut\": \"enter\",\n  \"customPromptsFolder\": \"copilot/copilot-custom-prompts\",\n  \"indexVaultToVectorStore\": \"ON MODE SWITCH\",\n  \"qaExclusions\": \"copilot\",\n  \"qaInclusions\": \"\",\n  \"chatNoteContextPath\": \"\",\n  \"chatNoteContextTags\": [],\n  \"enableIndexSync\": true,\n  \"debug\": true,\n  \"enableEncryption\": false,\n  \"maxSourceChunks\": 17,\n  \"enableInlineCitations\": true,\n  \"activeModels\": [\n    {\n      \"name\": \"copilot-plus-flash\",\n      \"provider\": \"copilot-plus\",\n      \"enabled\": true,\n      \"isBuiltIn\": true,\n      \"core\": true,\n      \"plusExclusive\": true,\n      \"projectEnabled\": false,\n      \"capabilities\": [\n        \"vision\"\n      ]\n    },\n    {\n      \"name\": \"google/gemini-2.5-flash-lite\",\n      \"provider\": \"openrouterai\",\n      \"enabled\": false,\n      \"isBuiltIn\": true,\n      \"core\": true,\n      \"projectEnabled\": true,\n      \"capabilities\": [\n        \"vision\"\n      ]\n    },\n    {\n      \"name\": \"google/gemini-2.5-flash\",\n      \"provider\": \"openrouterai\",\n      \"enabled\": true,\n      \"isBuiltIn\": true,\n      \"core\": true,\n      \"projectEnabled\": true,\n      \"capabilities\": [\n        \"vision\"\n      ]\n    },\n    {\n      \"name\": \"google/gemini-2.5-pro\",\n      \"provider\": \"openrouterai\",\n      \"enabled\": false,\n      \"isBuiltIn\": true,\n      \"core\": true,\n      \"projectEnabled\": true,\n      \"capabilities\": [\n        \"vision\"\n      ]\n    },\n    {\n      \"name\": \"gpt-5\",\n      \"provider\": \"openai\",\n      \"enabled\": false,\n      \"isBuiltIn\": true,\n      \"core\": true,\n      \"capabilities\": [\n        \"vision\"\n      ]\n    },\n    {\n      \"name\": \"gpt-5-mini\",\n      \"provider\": \"openai\",\n      \"enabled\": false,\n      \"isBuiltIn\": true,\n      \"core\": true,\n      \"capabilities\": [\n        \"vision\"\n      ]\n    },\n    {\n      \"name\": \"gpt-4.1\",\n      \"provider\": \"openai\",\n      \"enabled\": false,\n      \"isBuiltIn\": true,\n      \"core\": true,\n      \"projectEnabled\": true,\n      \"capabilities\": [\n        \"vision\"\n      ]\n    },\n    {\n      \"name\": \"gpt-4.1-mini\",\n      \"provider\": \"openai\",\n      \"enabled\": false,\n      \"isBuiltIn\": true,\n      \"core\": true,\n      \"projectEnabled\": true,\n      \"capabilities\": [\n        \"vision\"\n      ]\n    },\n    {\n      \"name\": \"deepseek-ai/DeepSeek-V3.2\",\n      \"provider\": \"3rd party (openai-format)\",\n      \"enabled\": true,\n      \"baseUrl\": \"https://api.siliconflow.cn/v1\",\n      \"isEmbeddingModel\": false,\n      \"stream\": true,\n      \"maxTokens\": 5500,\n      \"displayName\": \"DeepSeek-V3.2\",\n      \"capabilities\": [\n        \"reasoning\"\n      ]\n    },\n    {\n      \"name\": \"zai-org/GLM-4.6V\",\n      \"provider\": \"3rd party (openai-format)\",\n      \"enabled\": true,\n      \"baseUrl\": \"https://api.siliconflow.cn/v1\",\n      \"isEmbeddingModel\": false,\n      \"stream\": true,\n      \"maxTokens\": 5500,\n      \"displayName\": \"GLM-4.6V\",\n      \"capabilities\": [\n        \"reasoning\"\n      ]\n    },\n    {\n      \"name\": \"qwen/qwen3.5-122b-a10b\",\n      \"provider\": \"3rd party (openai-format)\",\n      \"enabled\": false,\n      \"isBuiltIn\": false,\n      \"baseUrl\": \"https://integrate.api.nvidia.com/v1\",\n      \"isEmbeddingModel\": false,\n      \"capabilities\": [\n        \"reasoning\"\n      ],\n      \"stream\": true,\n      \"displayName\": \"qwen/qwen3.5-122b-a10b\"\n    },\n    {\n      \"name\": \"MiniMax-M2.7\",\n      \"provider\": \"3rd party (openai-format)\",\n      \"enabled\": true,\n      \"isBuiltIn\": false,\n      \"baseUrl\": \"https://api.minimaxi.com/v1\",\n      \"isEmbeddingModel\": false,\n      \"capabilities\": [\n        \"reasoning\"\n      ],\n      \"stream\": true,\n      \"displayName\": \"MiniMax-M2.7\",\n      \"maxTokens\": 15200\n    }\n  ],\n  \"activeEmbeddingModels\": [\n    {\n      \"name\": \"copilot-plus-small\",\n      \"provider\": \"copilot-plus\",\n      \"enabled\": true,\n      \"isBuiltIn\": true,\n      \"isEmbeddingModel\": true,\n      \"core\": true,\n      \"plusExclusive\": true\n    },\n    {\n      \"name\": \"copilot-plus-large\",\n      \"provider\": \"copilot-plus-jina\",\n      \"enabled\": true,\n      \"isBuiltIn\": true,\n      \"isEmbeddingModel\": true,\n      \"core\": true,\n      \"plusExclusive\": true,\n      \"believerExclusive\": true,\n      \"dimensions\": 1024\n    },\n    {\n      \"name\": \"copilot-plus-multilingual\",\n      \"provider\": \"copilot-plus-jina\",\n      \"enabled\": true,\n      \"isBuiltIn\": true,\n      \"isEmbeddingModel\": true,\n      \"core\": true,\n      \"plusExclusive\": true,\n      \"dimensions\": 512\n    },\n    {\n      \"name\": \"text-embedding-3-small\",\n      \"provider\": \"openai\",\n      \"enabled\": true,\n      \"isBuiltIn\": true,\n      \"isEmbeddingModel\": true,\n      \"core\": true\n    },\n    {\n      \"name\": \"gemini-embedding-001\",\n      \"provider\": \"google\",\n      \"enabled\": true,\n      \"isBuiltIn\": true,\n      \"isEmbeddingModel\": true,\n      \"core\": true\n    },\n    {\n      \"name\": \"Qwen/Qwen3-Embedding-0.6B\",\n      \"provider\": \"siliconflow\",\n      \"enabled\": true,\n      \"isBuiltIn\": true,\n      \"isEmbeddingModel\": true,\n      \"core\": true,\n      \"baseUrl\": \"https://api.siliconflow.com/v1\"\n    },\n    {\n      \"name\": \"Qwen/Qwen3-Embedding-0.6B\",\n      \"provider\": \"3rd party (openai-format)\",\n      \"enabled\": true,\n      \"baseUrl\": \"https://api.siliconflow.cn/v1\",\n      \"isEmbeddingModel\": true,\n      \"enableCors\": false,\n      \"displayName\": \"Qwen3-Embedding-0.6B\"\n    },\n    {\n      \"name\": \"Qwen/Qwen3-Embedding-4B\",\n      \"provider\": \"3rd party (openai-format)\",\n      \"enabled\": true,\n      \"baseUrl\": \"https://api.siliconflow.cn/v1\",\n      \"isEmbeddingModel\": true,\n      \"enableCors\": false,\n      \"displayName\": \"Qwen3-Embedding-4B\"\n    },\n    {\n      \"name\": \"Qwen/Qwen3-Embedding-8B\",\n      \"provider\": \"3rd party (openai-format)\",\n      \"enabled\": true,\n      \"baseUrl\": \"https://api.siliconflow.cn/v1\",\n      \"isEmbeddingModel\": true,\n      \"enableCors\": true,\n      \"displayName\": \"Qwen3-Embedding-8B\"\n    }\n  ],\n  \"embeddingRequestsPerMin\": 60,\n  \"embeddingBatchSize\": 16,\n  \"disableIndexOnMobile\": true,\n  \"showSuggestedPrompts\": true,\n  \"showRelevantNotes\": true,\n  \"numPartitions\": 1,\n  \"lexicalSearchRamLimit\": 1000,\n  \"promptUsageTimestamps\": {},\n  \"promptSortStrategy\": \"timestamp\",\n  \"chatHistorySortStrategy\": \"recent\",\n  \"projectListSortStrategy\": \"recent\",\n  \"defaultConversationNoteName\": \"{$topic}@{$date}_{$time}\",\n  \"inlineEditCommands\": [],\n  \"projectList\": [],\n  \"lastDismissedVersion\": \"3.2.5\",\n  \"passMarkdownImages\": true,\n  \"enableAutonomousAgent\": true,\n  \"enableCustomPromptTemplating\": true,\n  \"enableSemanticSearchV3\": true,\n  \"enableLexicalBoosts\": true,\n  \"suggestedDefaultCommands\": true,\n  \"autonomousAgentMaxIterations\": 4,\n  \"autonomousAgentEnabledToolIds\": [\n    \"localSearch\",\n    \"readNote\",\n    \"webSearch\",\n    \"pomodoro\",\n    \"youtubeTranscription\",\n    \"writeToFile\",\n    \"replaceInFile\",\n    \"updateMemory\"\n  ],\n  \"reasoningEffort\": \"low\",\n  \"verbosity\": \"medium\",\n  \"memoryFolderName\": \"copilot/memory\",\n  \"enableRecentConversations\": true,\n  \"maxRecentConversations\": 30,\n  \"enableSavedMemory\": true,\n  \"quickCommandIncludeNoteContext\": true,\n  \"autoIncludeTextSelection\": false,\n  \"autoAddSelectionToContext\": false,\n  \"autoAcceptEdits\": false,\n  \"diffViewMode\": \"split\",\n  \"userSystemPromptsFolder\": \"copilot/system-prompts\",\n  \"defaultSystemPromptTitle\": \"\",\n  \"autoCompactThreshold\": 256000\n}\n```\n\n</content>\n</active_note>\n\n---\n\n[User query]:\n\n123"
      }
    ]
  }
]
```

**Layered Context Metadata:**

```
msg:msg-1774804097257-i45gapkjn | conv:N/A | v1

━━━ SYSTEM MESSAGE ━━━

🔒 L1_SYSTEM (18632c19) [CACHEABLE]
You are Obsidian Copilot, a helpful assistant that integrates AI to Obsidian note-taking.
  1. Never mention that you do not have access to something. Always rely on the user provided context.
  2. Always answer to the best of your knowledge. If you are unsure about something, say so and ask the use...[truncated]

━━━ USER MESSAGE ━━━

⚡ L3_TURN (0fe45306)
<active_note>
<title>copilot-log</title>
<path>copilot/copilot-log.md</path>
<ctime>2026-03-29T17:03:24.077Z</ctime>
<mtime>2026-03-29T17:08:09.375Z</mtime>
<content>
2026-03-29T17:08:02.361Z INFO Copilot Plus: Initializing semantic index event listeners
2026-03-29T17:08:02.361Z INFO VaultDataManage...[truncated]

⚡ L5_USER (a665a459)
123

```


## Settings
```json
{
  "userId": "6410398c-845c-4477-a9d4-e10fba605424",
  "isPlusUser": false,
  "amazonBedrockRegion": "",
  "githubCopilotAccessToken": "",
  "githubCopilotToken": "",
  "githubCopilotTokenExpiresAt": 0,
  "defaultChainType": "llm_chain",
  "defaultModelKey": "MiniMax-M2.7|3rd party (openai-format)",
  "embeddingModelKey": "Qwen/Qwen3-Embedding-0.6B|3rd party (openai-format)",
  "temperature": 0.1,
  "maxTokens": 6000,
  "contextTurns": 15,
  "userSystemPrompt": "",
  "openAIProxyBaseUrl": "",
  "openAIEmbeddingProxyBaseUrl": "",
  "stream": true,
  "defaultSaveFolder": "copilot/copilot-conversations",
  "defaultConversationTag": "copilot-conversation",
  "autosaveChat": true,
  "generateAIChatTitleOnSave": true,
  "autoAddActiveContentToContext": true,
  "defaultOpenArea": "view",
  "defaultSendShortcut": "enter",
  "customPromptsFolder": "copilot/copilot-custom-prompts",
  "indexVaultToVectorStore": "ON MODE SWITCH",
  "qaExclusions": "copilot",
  "qaInclusions": "",
  "chatNoteContextPath": "",
  "chatNoteContextTags": [],
  "enableIndexSync": true,
  "debug": true,
  "enableEncryption": false,
  "maxSourceChunks": 17,
  "enableInlineCitations": true,
  "activeModels": [
    {
      "name": "copilot-plus-flash",
      "provider": "copilot-plus",
      "enabled": true,
      "isBuiltIn": true,
      "core": true,
      "plusExclusive": true,
      "projectEnabled": false,
      "capabilities": [
        "vision"
      ]
    },
    {
      "name": "google/gemini-2.5-flash-lite",
      "provider": "openrouterai",
      "enabled": false,
      "isBuiltIn": true,
      "core": true,
      "projectEnabled": true,
      "capabilities": [
        "vision"
      ]
    },
    {
      "name": "google/gemini-2.5-flash",
      "provider": "openrouterai",
      "enabled": true,
      "isBuiltIn": true,
      "core": true,
      "projectEnabled": true,
      "capabilities": [
        "vision"
      ]
    },
    {
      "name": "google/gemini-2.5-pro",
      "provider": "openrouterai",
      "enabled": false,
      "isBuiltIn": true,
      "core": true,
      "projectEnabled": true,
      "capabilities": [
        "vision"
      ]
    },
    {
      "name": "gpt-5",
      "provider": "openai",
      "enabled": false,
      "isBuiltIn": true,
      "core": true,
      "capabilities": [
        "vision"
      ]
    },
    {
      "name": "gpt-5-mini",
      "provider": "openai",
      "enabled": false,
      "isBuiltIn": true,
      "core": true,
      "capabilities": [
        "vision"
      ]
    },
    {
      "name": "gpt-4.1",
      "provider": "openai",
      "enabled": false,
      "isBuiltIn": true,
      "core": true,
      "projectEnabled": true,
      "capabilities": [
        "vision"
      ]
    },
    {
      "name": "gpt-4.1-mini",
      "provider": "openai",
      "enabled": false,
      "isBuiltIn": true,
      "core": true,
      "projectEnabled": true,
      "capabilities": [
        "vision"
      ]
    },
    {
      "name": "deepseek-ai/DeepSeek-V3.2",
      "provider": "3rd party (openai-format)",
      "enabled": true,
      "baseUrl": "https://api.siliconflow.cn/v1",
      "isEmbeddingModel": false,
      "stream": true,
      "maxTokens": 5500,
      "displayName": "DeepSeek-V3.2",
      "capabilities": [
        "reasoning"
      ]
    },
    {
      "name": "zai-org/GLM-4.6V",
      "provider": "3rd party (openai-format)",
      "enabled": true,
      "baseUrl": "https://api.siliconflow.cn/v1",
      "isEmbeddingModel": false,
      "stream": true,
      "maxTokens": 5500,
      "displayName": "GLM-4.6V",
      "capabilities": [
        "reasoning"
      ]
    },
    {
      "name": "qwen/qwen3.5-122b-a10b",
      "provider": "3rd party (openai-format)",
      "enabled": false,
      "isBuiltIn": false,
      "baseUrl": "https://integrate.api.nvidia.com/v1",
      "isEmbeddingModel": false,
      "capabilities": [
        "reasoning"
      ],
      "stream": true,
      "displayName": "qwen/qwen3.5-122b-a10b"
    },
    {
      "name": "MiniMax-M2.7",
      "provider": "3rd party (openai-format)",
      "enabled": true,
      "isBuiltIn": false,
      "baseUrl": "https://api.minimaxi.com/v1",
      "isEmbeddingModel": false,
      "capabilities": [
        "reasoning"
      ],
      "stream": true,
      "displayName": "MiniMax-M2.7",
      "maxTokens": 15200
    }
  ],
  "activeEmbeddingModels": [
    {
      "name": "copilot-plus-small",
      "provider": "copilot-plus",
      "enabled": true,
      "isBuiltIn": true,
      "isEmbeddingModel": true,
      "core": true,
      "plusExclusive": true
    },
    {
      "name": "copilot-plus-large",
      "provider": "copilot-plus-jina",
      "enabled": true,
      "isBuiltIn": true,
      "isEmbeddingModel": true,
      "core": true,
      "plusExclusive": true,
      "believerExclusive": true,
      "dimensions": 1024
    },
    {
      "name": "copilot-plus-multilingual",
      "provider": "copilot-plus-jina",
      "enabled": true,
      "isBuiltIn": true,
      "isEmbeddingModel": true,
      "core": true,
      "plusExclusive": true,
      "dimensions": 512
    },
    {
      "name": "text-embedding-3-small",
      "provider": "openai",
      "enabled": true,
      "isBuiltIn": true,
      "isEmbeddingModel": true,
      "core": true
    },
    {
      "name": "gemini-embedding-001",
      "provider": "google",
      "enabled": true,
      "isBuiltIn": true,
      "isEmbeddingModel": true,
      "core": true
    },
    {
      "name": "Qwen/Qwen3-Embedding-0.6B",
      "provider": "siliconflow",
      "enabled": true,
      "isBuiltIn": true,
      "isEmbeddingModel": true,
      "core": true,
      "baseUrl": "https://api.siliconflow.com/v1"
    },
    {
      "name": "Qwen/Qwen3-Embedding-0.6B",
      "provider": "3rd party (openai-format)",
      "enabled": true,
      "baseUrl": "https://api.siliconflow.cn/v1",
      "isEmbeddingModel": true,
      "enableCors": false,
      "displayName": "Qwen3-Embedding-0.6B"
    },
    {
      "name": "Qwen/Qwen3-Embedding-4B",
      "provider": "3rd party (openai-format)",
      "enabled": true,
      "baseUrl": "https://api.siliconflow.cn/v1",
      "isEmbeddingModel": true,
      "enableCors": false,
      "displayName": "Qwen3-Embedding-4B"
    },
    {
      "name": "Qwen/Qwen3-Embedding-8B",
      "provider": "3rd party (openai-format)",
      "enabled": true,
      "baseUrl": "https://api.siliconflow.cn/v1",
      "isEmbeddingModel": true,
      "enableCors": true,
      "displayName": "Qwen3-Embedding-8B"
    }
  ],
  "embeddingRequestsPerMin": 60,
  "embeddingBatchSize": 16,
  "disableIndexOnMobile": true,
  "showSuggestedPrompts": true,
  "showRelevantNotes": true,
  "numPartitions": 1,
  "lexicalSearchRamLimit": 1000,
  "promptUsageTimestamps": {},
  "promptSortStrategy": "timestamp",
  "chatHistorySortStrategy": "recent",
  "projectListSortStrategy": "recent",
  "defaultConversationNoteName": "{$topic}@{$date}_{$time}",
  "inlineEditCommands": [],
  "projectList": [],
  "lastDismissedVersion": "3.2.5",
  "passMarkdownImages": true,
  "enableAutonomousAgent": true,
  "enableCustomPromptTemplating": true,
  "enableSemanticSearchV3": true,
  "enableLexicalBoosts": true,
  "suggestedDefaultCommands": true,
  "autonomousAgentMaxIterations": 4,
  "autonomousAgentEnabledToolIds": [
    "localSearch",
    "readNote",
    "webSearch",
    "pomodoro",
    "youtubeTranscription",
    "writeToFile",
    "replaceInFile",
    "updateMemory"
  ],
  "reasoningEffort": "low",
  "verbosity": "medium",
  "memoryFolderName": "copilot/memory",
  "enableRecentConversations": true,
  "maxRecentConversations": 30,
  "enableSavedMemory": true,
  "quickCommandIncludeNoteContext": true,
  "autoIncludeTextSelection": false,
  "autoAddSelectionToContext": false,
  "autoAcceptEdits": false,
  "diffViewMode": "split",
  "userSystemPromptsFolder": "copilot/system-prompts",
  "defaultSystemPromptTitle": "",
  "autoCompactThreshold": 256000
}
```
