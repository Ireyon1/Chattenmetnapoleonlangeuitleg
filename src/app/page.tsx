import TestChatBot from '@/components/TestChatBot'
import CopyButton from '@/components/CopyButton'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-600 rounded-full mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            DC Buddy 📦
          </h1>
          
          <p className="text-xl text-orange-700 font-medium mb-6">
            Jouw digitale collega uit het distributiecentrum! Ontdek hoe logistiek écht werkt.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">👷‍♂️</span>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-800">Hoi! Ik ben Marco</h3>
                <p className="text-gray-600">Teamleider Outbound bij LogiMax DC</p>
                <p className="text-sm text-orange-600 font-medium">15 jaar ervaring in de logistiek</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          
          {/* Setup Instructions */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-orange-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                🎯
              </span>
              Welkom bij DC Buddy!
            </h2>
            
            <div className="space-y-6">
              
              {/* What is DC Buddy */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Wat is DC Buddy?
                </h3>
                <p className="text-gray-600 mb-3">
                  DC Buddy is jouw persoonlijke gids door de wereld van distributiecentra. Als 1e jaars HBO student krijg je via deze chatbot inzicht in:
                </p>
                <ul className="text-gray-600 space-y-2 ml-4">
                  <li>• <strong>Dagelijkse processen</strong> - Van inbound tot outbound</li>
                  <li>• <strong>Technologie & systemen</strong> - WMS, scanners, robots</li>
                  <li>• <strong>Carrièremogelijkheden</strong> - Van operator tot manager</li>
                  <li>• <strong>Praktische tips</strong> - Veiligheid, efficiency, teamwork</li>
                </ul>
              </div>

              {/* How to use */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Hoe werkt het?
                </h3>
                <p className="text-gray-600 mb-3">
                  Stel gewoon je vragen! Marco (jouw AI-collega) heeft 15 jaar ervaring en kan je alles vertellen over:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">📋 Processen</h4>
                    <p className="text-sm text-blue-700">"Hoe werkt het pickproces?" "Wat is cross-docking?"</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">🤖 Technologie</h4>
                    <p className="text-sm text-green-700">"Wat doet een WMS?" "Hoe werken pick robots?"</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">👥 Carrière</h4>
                    <p className="text-sm text-purple-700">"Welke functies zijn er?" "Hoe word ik teamleider?"</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">⚡ Praktijk</h4>
                    <p className="text-sm text-orange-700">"Veiligheidstips?" "Hoe werk je efficiënt?"</p>
                  </div>
                </div>
              </div>

              {/* Step 1 - API Key Setup */}
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Stap 1: API Key instellen (voor docenten/beheerders)
                </h3>
                <p className="text-gray-600 mb-3">
                  Om DC Buddy te laten werken, moet er een Gemini API key worden ingesteld. Dit hoeft alleen door de docent/beheerder gedaan te worden:
                </p>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div className="flex items-center justify-end mb-2">
                    <CopyButton 
                      text="GEMINI_API_KEY=your_actual_api_key_here"
                      className="text-orange-400 hover:text-orange-300 text-xs transition-colors"
                      title="Kopieer .env.local inhoud"
                    />
                  </div>
                  <code>GEMINI_API_KEY=your_actual_api_key_here</code>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  API key verkrijgen via: <a href="https://makersuite.google.com/app/apikey" target="_blank" className="text-orange-600 hover:text-orange-800 underline">Google AI Studio</a>
                </p>
              </div>

              {/* Step 2 - Test the chatbot */}
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Stap 2: Start je ontdekkingsreis!
                </h3>
                <TestChatBot />
              </div>

              {/* Example questions */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  💡 Voorbeeldvragen om mee te beginnen
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700 italic">"Marco, kun je me uitleggen hoe een normale werkdag in het DC eruitziet?"</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700 italic">"Wat voor technologie gebruiken jullie voor het picken van orders?"</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700 italic">"Welke carrièremogelijkheden zijn er in de logistiek?"</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700 italic">"Hoe zorg je voor veiligheid in het distributiecentrum?"</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700 italic">"Kun je uitleggen wat cross-docking is met een praktijkvoorbeeld?"</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700 italic">"Wat zijn de grootste uitdagingen in moderne logistiek?"</p>
                  </div>
                </div>
              </div>

              {/* Learning objectives */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  🎓 Wat ga je leren?
                </h3>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-indigo-800 font-medium mb-3">Na gesprekken met DC Buddy begrijp je:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-indigo-700 mb-2">📦 Operationeel</h4>
                      <ul className="text-sm text-indigo-600 space-y-1">
                        <li>• Inbound & outbound processen</li>
                        <li>• Pick & pack strategieën</li>
                        <li>• Voorraadmanagement</li>
                        <li>• Kwaliteitscontrole</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-700 mb-2">🚀 Strategisch</h4>
                      <ul className="text-sm text-indigo-600 space-y-1">
                        <li>• Automatisering & robotica</li>
                        <li>• Duurzaamheid in logistiek</li>
                        <li>• Toekomst van distributie</li>
                        <li>• Carrièreontwikkeling</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 text-orange-600">
              <span>📦</span>
              <span>Ontdek de wereld van logistiek!</span>
              <span>🚛</span>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              DC Buddy • Educatieve Logistiek Chatbot • Powered by AI
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}