"use client";

import { Editor } from "@monaco-editor/react";
import { Language } from "@/data/problems";

interface CodeEditorProps {
  language: Language;
  code: string;
  onChange: (value: string | undefined) => void;
}

export function CodeEditor({ language: _language, code: _code, onChange }: CodeEditorProps) {
  const editorLanguage = _language === "python" ? "python" : "java";

  return (
    <div className="h-[500px] border rounded-lg overflow-hidden">
      <Editor
        key={editorLanguage}
        height="100%"
        defaultLanguage={editorLanguage}
        language={editorLanguage}
        value={_code}
        onChange={onChange}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          roundedSelection: false,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: "on",
        }}
      />
    </div>
  );
} 