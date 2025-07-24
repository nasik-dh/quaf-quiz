// ==================== CONFIGURATION ====================
const CONFIG = {
  BOT_TOKEN: "7352288690:AAEHWSSARHPNwL_nTOe3GOeExtpOLr7jFCk", // 🔁 Replace this with your bot token
  LOG_SHEET: "Logs",
  QUIZ_DATA: {
    quiz_1: {
      subjectId: "Qur'an",
      questions: [
        {
                    question: "ഖുർആൻ അവതരിച്ചത് എത്ര കാലം കൊണ്ട്?",
                    options: ["20", "22", "23"],
                    correctAnswer: 2
                },
                {
                    question: "ഖുർആനിൽ ആകെ എത്ര സൂറത്തുകൾ ഉണ്ട്?",
                    options: ["111", "114", "117"],
                    correctAnswer: 1
                },
                {
                    question: "ഖുർആൻ അവതരണത്തിന്റെ മുമ്പ്  അത് രേഖപ്പെടുത്തിയിരുന്നത് എവിടെ?",
                    options: ["ആകാശത്ത്", "ലൗഹുൽ മഹ്ഫൂളിൽ", "ഭൂമിയിൽ","None"],
                    correctAnswer: 1
                },
                {
                    question: "ഖുർആനിൽ ആദ്യമായി അവതരിച്ച ആയത്ത് ഏത് സൂറത്തിലാണ്?",
                    options: ["അലഖ്", "മുദസിർ", "ബഖറ"],
                    correctAnswer: 0
                },
                {
                    question: "ഒരു സൂറത്തായി ഒന്നിച്ച് പൂര്‍ണ്ണമായി  അവതരിച്ച സൂറത്ത് ?",
                    options: ["മുസ്സമിൽ", "കൗസർ", "മുദസിർ"],
                    correctAnswer: 2
                },
                {
                    question: "ഖുർആനിലെ ഏറ്റവും മഹത്വമുള്ള സൂറത്ത്?",
                    options: ["മുൽക്", "ഫാത്തിഹ", "യാസീൻ"],
                    correctAnswer: 1
                },
                {
                    question: "ഖുർആനിലെ ഏറ്റവും ചെറിയ സൂറത്ത്?",
                    options: ["അസ്ർ", "കൗസർ", "ഇഖ്ലാസ്"],
                    correctAnswer: 1
                },
                {
                    question: "എല്ലാ ആയത്തിലും അല്ലാഹു എന്ന പദമുള്ള സൂറത്ത്?",
                    options: ["ഹഷ്‌ർ", "ഫാത്തിഹ", "മുജാദല"],
                    correctAnswer: 2
                },
                {
                    question: "ഖുര്‍ആനില്‍ പേരെടുത്ത് പറഞ്ഞ ഒരേ ഒരു സ്വഹാബി?",
                    options: ["സൈദ് (റ)", "അബ്ബാസ് (റ)", "അബൂബക്കർ (റ)"],
                    correctAnswer: 0
                },
                {
                    question: "ഖുർആൻ അവതരിച്ച രാത്രിയുടെ പേര്?",
                    options: ["ലൈലത്തുൽ ബറാഅ", "ലൈലത്തുൽ ഷഅബാൻ", "ലൈലത്തുൽ ഖദ്ർ"],
                    correctAnswer: 2
                },
                {
                    question: "ഖുർആനിൽ എത്ര നബിമാരുടെ പേര് പരാമര്‍ശിച്ചിട്ടുണ്ട്?",
                    options: ["33", "15", "25"],
                    correctAnswer: 2
                },
                {
                    question: "ഖുർആനിൽ ഏറ്റവുമധികം തവണ പേര് പറയപ്പെട്ട നബി?",
                    options: ["ഇബ്രാഹീം (അ)", "മൂസ(അ)", "സുലൈമാൻ(അ)"],
                    correctAnswer: 1
                },
                {
                    question: "നരകത്തിന് എത്ര വാതിലുകളുണ്ടെന്നാണ് ഖുര്‍ആനിലെ പരാമര്‍ശം?",
                    options: ["7", "11", "3"],
                    correctAnswer: 0
                },
                {
                    question: "ഖുർആനിന്റെ മണവാട്ടി എന്നറിയപ്പെടുന്ന സൂറത്ത്?",
                    options: ["റഹ്‌മാൻ", "വാഖിഅ", "മുൽക്"],
                    correctAnswer: 0
                },
                {
                    question: "ഖുർആനിന്റെ ഹൃദയം എന്നറിയപ്പെടുന്ന സൂറത്ത്?",
                    options: ["ഇഖ്ലാസ്", "യാസീൻ", "കഹ്‌ഫ്"],
                    correctAnswer: 1
                },
                {
                    question: "ഖുർആൻ പേരെടുത്തു പറഞ്ഞ ഏക സ്ത്രീ?",
                    options: ["മർയം", "ആസിയ", "മാഷിത"],
                    correctAnswer: 0
                },
                {
                    question: "ഖുർആൻ പരാമർശിച്ച റൂഹുൽ ആമീൻ എന്ന മലക്ക് ?",
                    options: ["ജിബ്‌രീൽ", "ഇസ്രാഫീൽ", "അസ്റാഈൽ"],
                    correctAnswer: 0
                },
                {
                    question: "രണ്ട് ബിസ്മിയുള്ള സൂറത്ത്?",
                    options: ["റഹ്‌മാൻ", "ഫാത്തിർ", "നംൽ"],
                    correctAnswer: 2
                },
                {
                    question: "അബാബീൽ പക്ഷികളെ പരാമർശിച്ച സൂറത്ത്?",
                    options: ["ഫീൽ", "ഖുറൈശ്", "മാഊൻ"],
                    correctAnswer: 0
                },
                {
                    question: "ഇബ്രാഹിം (അ) ന്റെ കാലത്ത് ജീവിച്ച മറ്റൊരു നബി?",
                    options: ["ഹാറൂൻ", "ലൂഥ്", "ആർമിയാഅ്"],
                    correctAnswer: 1
                }
      ]
    },
    quiz_2: {
      subjectId: "Hadeeth",
      questions: [
        {
                    question: "ഖുർആൻ കഴിഞ്ഞാൽ ഏറ്റവും ശ്രേഷ്ഠതയുള്ള കിതാബ്?",
                    options: ["സ്വഹീഹ് ബുഖാരി", "സ്വഹീഹ് മുസ്‌ലിം", "തിർമുദി"],
                    correctAnswer: 0
                },
                {
                    question: "അല്ലാഹു മനുഷ്യന്റെ ഏത് ഭാഗത്തേക്കാണ് നോക്കുന്നത്?",
                    options: ["جسد", "جمال", "قلب"],
                    correctAnswer: 2
                },
                {
                    question: "കൊല്ലുന്നവനും കൊല്ലപ്പെടുന്നവനും നരകത്തിലാണ് (കൊല്ലപ്പെടുന്നവൻ എന്ത് കൊണ്ട് നരകത്തിൽ പ്രവേശിക്കുന്നു)",
                    options: ["അവൻ അക്രമിയാണ്", "അവൻ ദൈവ നിഷേധിയാണ്", "അവൻ തന്റെ കൂട്ടുകാരന്റെ വധത്തിൽ ആഗ്രഹമുള്ളവനാണ്"],
                    correctAnswer: 2
                },
                {
                    question: "അല്ലാഹു തൗബ സ്വീകരിക്കാത്ത സമയം?",
                    options: ["അല്ലാഹുവിങ്കൽ കള്ളൻ എന്ന് എഴുതപ്പെട്ടാൽ", "സൂര്യൻ പടിഞ്ഞാറ് നിന്ന് ഉദിച്ചാൽ", "ഈസാനബി (അ) ഇറങ്ങി വന്നാൽ"],
                    correctAnswer: 1
                },
                {
                    question: "(സിദ്ഖ്) മനുഷ്യനെ എവിടേക്ക് നയിക്കും?",
                    options: ["സന്മാർഗം", "സ്വർഗം", "ഗുണം"],
                    correctAnswer: 2
                },
                {
                    question: "ബനൂ ഇസ്റാഈല്യരിലെ ആദ്യ ഫിത്ന ആരിലായിരുന്നു?",
                    options: ["സമ്പന്നൻ", "പെണ്ണ്", "ആണ്"],
                    correctAnswer: 1
                },
                {
                    question: "പക്ഷികൾക്ക് ഭക്ഷണം നൽകുന്നത് പോലെ അല്ലാഹു ഭക്ഷണം നൽകും ആർക്ക്?",
                    options: ["അല്ലാഹുവിനെ ഭരമേല്പിച്ചവർക്ക്", "കുറഞ്ഞത് കൊണ്ട് തൃപ്തിപ്പെടുന്നവർക്ക്", "പ്രഭാതത്തിലും പ്രദോഷത്തിലും മസ്ജിദിൽ പോകുന്നവർക്ക്"],
                    correctAnswer: 0
                },
                {
                    question: "ഉമ്മുസലമ (റ) യുടെ യഥാർത്ഥ പേര്?",
                    options: ["ഹിന്ദ് ബിൻത് അബി ഉത്ബ", "ഹിന്ദ് ബിൻത് അബി ഉമയ്യ", "ഹിന്ദ് ബിൻത് അബി സലമ"],
                    correctAnswer: 1
                },
                {
                    question: "ആര് ആരോട് പറഞ്ഞതാണ് افلا احب ان اكون عبدا شكورا ?",
                    options: ["നബി (സ) ഉമ്മുസലമ (റ)യോട്", "നബി (സ) ആയിഷാ (റ) യോട്", "നബി (സ) അബൂഹുറയ്റ(റ)നോട്"],
                    correctAnswer: 1
                },
                {
                    question: "ഈമാനിന്ന് എത്ര ശാഖകളുണ്ട്?",
                    options: ["70", "60", "50"],
                    correctAnswer: 0
                },
                {
                    question: "അല്ലാഹു അർശിന്റെ തണലിട്ട് കൊടുക്കുന്ന വിഭാഗങ്ങൾ എത്ര?",
                    options: ["10", "7", "5"],
                    correctAnswer: 1
                },
                {
                    question: "ഒരു കാര്യം ചെയ്താൽ നിങ്ങൾ പരസ്പരം സ്നേഹമുള്ളവരാകും. ആ കാര്യം ഏത്?",
                    options: ["സ്വദഖ അധികരിപ്പിക്കുക", "രഹസ്യങ്ങളെ പരസ്യപ്പെടുത്താതിരുന്നാൽ", "സലാം പറയലിനെ വ്യാപിപ്പിക്കുക"],
                    correctAnswer: 2
                },
                {
                    question: "الموجبتان ?",
                    options: ["സ്വർഗവും നരകവും നിർബന്ധമാക്കുന്ന കാര്യം", "നോമ്പും നിസ്കാരവും", "സ്വദഖയും സകാത്തും"],
                    correctAnswer: 0
                },
                {
                    question: "ഈ ഹദീസ് നബി (സ) പറഞ്ഞ സന്ദർഭം ഏത് لايموتن أحدكم إلا وهويحسن الظن بالله عز وجل ?",
                    options: ["വഫാതാകുന്നതിന് മൂന്ന് ദിവസം മുമ്പ്", "വഫാത്തിന്റെ സമയത്ത്", "പനി വന്ന സമയത്ത്"],
                    correctAnswer: 0
                },
                {
                    question: "നബി (സ) പറഞ്ഞു. നിങ്ങളിൽ ഏറ്റവും ഉത്തമർ?",
                    options: ["ഹൃദയം പള്ളികളുമായി ബന്ധപ്പെട്ട വ്യക്തികൾ", "വെള്ള വസ്ത്രം ധരിക്കുന്നവർ", "ഭാര്യമാരോട് നല്ല നിലയിൽ വർത്തിക്കുന്നവർ"],
                    correctAnswer: 2
                },
                {
                    question: "നബി (സ) പറഞ്ഞു. രണ്ടനുഗ്രഹങ്ങൾ ഉപയോഗപ്പെടുത്തുന്നതിൽ അധിക പേരും പരാജിതരാണ്.രണ്ടനുഗ്രഹങ്ങൾ ഏതെല്ലാം?",
                    options: ["المال والبنون", "الصحة والفراغ", "الصلاة والصوم"],
                    correctAnswer: 1
                },
                {
                    question: "വസ്ത്രങ്ങളിൽ ഏറ്റവും ഉത്തമമായ വസ്ത്രം?",
                    options: ["പച്ച നിറത്തിലുള്ള വസ്ത്രം", "വെള്ള നിറത്തിലുള്ളവസ്ത്രം", "പെരുന്നാൾ വസ്ത്രം"],
                    correctAnswer: 1
                },
                {
                    question: "മക്കം ഫത്ഹിന്റെ ദിവസം ആരുടെ തലയിലും താടിയിലുമാണ് നിറം പൂശാൻ കല്പിച്ചത്?",
                    options: ["ابو قحافة", "أبي أمية", "ابو عمر"],
                    correctAnswer: 0
                },
                {
                    question: "മനുഷ്യരെ കൂടുതലായി നരകത്തിലാക്കുന്ന അവയവം?",
                    options: ["عين", "يد", "فرج"],
                    correctAnswer: 2
                },
                {
                    question: "യഥാർത്ഥ ഐശ്വര്യം ഏത്?",
                    options: ["ശാരീരിക ഐശ്വര്യം", "സാമ്പത്തിക ഐശ്വര്യം", "മാനസിക ഐശ്വര്യം"],
                    correctAnswer: 2
                }
      ]
    },
    quiz_3: {
      subjectId: "Fiqh",
      questions: [
        {
                    question: "ജുമുഅയുടെ രാവും പകലും _______ ഓതണം?",
                    options: ["യാസീൻ", "കഹ്‌ഫ്", "റഹ്‌മാൻ"],
                    correctAnswer: 1
                },
                {
                    question: "രാത്രി അല്പം ഇറങ്ങിയതിനു ശേഷം എഴുനേറ്റു നമസ്കരിക്കുമ്പോൾ ഖിയാമുലൈലിന്_____________ എന്ന് പറയുന്നു?",
                    options: ["തഹജ്ജുദ്", "ളുഹാ", "തറാവീഹ്"],
                    correctAnswer: 0
                },
                {
                    question: "വിത്ർ എന്ന പതത്തിന്റെ അർഥം ________ ?",
                    options: ["ഇരട്ട", "ഒറ്റ", "പതിവ്"],
                    correctAnswer: 1
                },
                {
                    question: "ഫർള് നമസ്കാരങ്ങളുടെ മുമ്പും ശേഷവും ചെയ്യുന്ന സുന്നത്തുനമസ്കാരങ്ങൾ __________ എന്ന് പറയുന്നു?",
                    options: ["വിത്ർ", "തഹിയ്യത്", "റവാതിബ്"],
                    correctAnswer: 2
                },
                {
                    question: "وارحمه = അർഥം എന്താണ് ?",
                    options: ["ഇദേഹത്തോട് നീ കരുണ കാണിക്കേണമേ", "ങ്ങങ്ങൾക്കൊരു മുന്ഗാമിയെ തെരേണമേ", "ഇദേഹത്തതിന് പ്രവേശന സ്ഥലം നീ വിശാലമാക്കി തരേണമെ"],
                    correctAnswer: 0
                },
                {
                    question: "ജുമുഅ നമസ്കാരം ആർക്കൊക്കെയാണ് നിർബന്ധം?",
                    options: ["പുരുഷന്മാർ", "സ്വതന്ത്ര പുരുഷന്മാർ", "കുട്ടികൾ"],
                    correctAnswer: 1
                },
                {
                    question: "മയ്യിത്ത നമസ്കാരങ്ങൾക് എത്ര ഫർളുകളുണ്ട്?",
                    options: ["8", "6", "4"],
                    correctAnswer: 0
                },
                {
                    question: "നമസ്കാരത്തിൽ ഇളവുള്ളത് ആർക്കൊക്കെ?",
                    options: ["യാത്രക്കാർ", "രോഗികൾ", "യാത്രക്കാർ,രോഗികൾ"],
                    correctAnswer: 0
                },
                {
                    question: "ഹിജ്റ വര്ഷം എത്രാമത്തെ മാസമാണ് റമദാൻ?",
                    options: ["8", "9", "10"],
                    correctAnswer: 1
                },
                {
                    question: "നമസ്കാരം ബാതിലാവുന്ന കാര്യം ചൂസ് ചെയുക?",
                    options: ["നമസ്കാരത്തിന് ശർത്തുകളിലേതെങ്കിലുമൊന്ന് വേണെമെങ്കിൽ പാലിച്ചാൽ", "ഖുർആൻ,ദിക്ർ,ദുആ എന്നിവയെല്ലാത്ത മറ്റു വാക്കുകൾ ഉച്ചരിച്ചാൽ", "നമസ്കാരത്തിനിടയിൽ ആ നമസ്കാരം നിർത്തുകയാണ് എന്ന് കരുതിയില്ലെങ്കിൽ നമസ്കാരം ബാതിലാവും."],
                    correctAnswer: 1
                },
                {
                    question: "വുളൂഇൽ മുഖം കഴുകലിന്റെ വിധി?",
                    options: ["സുന്നത്", "ഫർള്", "ജാഇസ്"],
                    correctAnswer: 1
                },
                {
                    question: "മുന്നിൽ __________ അവർക്കു പിന്നിൽ ________ ഏറ്റവും പിന്നിൽ _________?",
                    options: ["പുരുഷന്മാർ,കുട്ടികൾ,സ്ത്രീകൾ", "പുരുഷന്മാർ,സ്ത്രീകൾ,കുട്ടികൾ", "പുരുഷന്മാർ,പെൺകുട്ടികൾ,സ്ത്രീകൾ"],
                    correctAnswer: 0
                },
                {
                    question: "ജമാഅത് നമസ്കാരങ്ങൾ ശെരിയാവുന്നതിനുള്ള നിബന്ധനകൾ എത്ര?",
                    options: ["5", "7", "12"],
                    correctAnswer: 1
                },
                {
                    question: "നമസ്കാരം ബാതിലാവുന്ന കാര്യങ്ങൾ എത്ര?",
                    options: ["8", "7", "6"],
                    correctAnswer: 2
                },
                {
                    question: "ഇവിടെ കൊടുത്തതിൽ ഏതാണ് സുന്നത്ത്?",
                    options: ["ളുഹർ നമസ്കരിക്കൽ", "നോമ്പ് തുറക്കൽ", "ഖിയാമുലൈൽ ഒറ്റ റകഅത്ത ആയി നിർത്തുക"],
                    correctAnswer: 2
                },
                {
                    question: "ഒരാൾ വജ്ജഹ്തു ഓതാൻ മറന്നു ബിസ്മി ഓതിയാൽ വീണ്ടും വജ്ജഹ്തു ഓതുന്നതിന്റെ വിധി?",
                    options: ["ജാഇസ്", "കറാഹത്", "ഹറാം"],
                    correctAnswer: 2
                },
                {
                    question: "صلاه الاستسقاء ?",
                    options: ["ഗ്രഹണനമസ്കാരം", "നന്മയെ തേടുന്ന നമസ്കാരം", "മഴക്കുവേണ്ടിയുള്ള നമസ്കാരം"],
                    correctAnswer: 2
                },
                {
                    question: "ജുമുഅക്ക് മുമ്പ് റവാതിബ് ഉണ്ടോ?",
                    options: ["ഇല്ല", "ഉണ്ട്", "നിർബന്ധം ഇല്ല"],
                    correctAnswer: 0
                },
                {
                    question: "ഖുതുബയുടെ നിർബന്ധ ഘടകങ്ങൾ എത്ര?",
                    options: ["9", "7", "5"],
                    correctAnswer: 2
                },
                {
                    question: "നമസ്കരിക്കാൻ പാടില്ലാത്ത സമയങ്ങൾ എത്ര?",
                    options: ["5", "4", "3"],
                    correctAnswer: 1
                }
      ]
    },
    quiz_4: {
      subjectId: "Thareeq",
      questions: [
        {
                    question: "ഇബ്രാഹിം (അ) ന്റെ സ്വദേശം?",
                    options: ["ഇറാഖ്", "ഇറാൻ", "ഫലസ്തീൻ"],
                    correctAnswer: 0
                },
                {
                    question: "ഉറുമ്പിനോട് സംസാരിച്ച പ്രവാചകൻ?",
                    options: ["ദാവൂദ്", "സുലൈമാൻ", "ഹാറൂൻ"],
                    correctAnswer: 1
                },
                {
                    question: "ഉമ്മുൽ ഖുറാ പട്ടണം ഏത്?",
                    options: ["മക്ക", "മദീന", "ജെറുസലേം"],
                    correctAnswer: 0
                },
                {
                    question: "യഹൂദികൾ ദൈവ പുത്രനായി കണ്ടിരുന്നത് ആരെ?",
                    options: ["ദാനിയാൽ", "ഷംവീൽ", "ഉസൈർ"],
                    correctAnswer: 2
                },
                {
                    question: "അബു ജഹൽ ന്റെ യഥാർത്ഥ പേര്?",
                    options: ["അംറ് ബിൻ അസിം", "അംറ് ബിൻ ഖുതമാ", "അംറ് ബിൻ ഹിഷാം"],
                    correctAnswer: 2
                },
                {
                    question: "നൂഹ് നബിയുടെ പ്രബോധന കാലം?",
                    options: ["670", "950", "786"],
                    correctAnswer: 1
                },
                {
                    question: "നീനവ സമുദായത്തിലേക്ക് അയക്കപ്പെട്ട പ്രവാചകൻ?",
                    options: ["യഹ്‌യ", "യൂനുസ്", "ദുൽകിഫ് ലി"],
                    correctAnswer: 1
                },
                {
                    question: "സമൂദ് സമുദായത്തിലേക്ക് നിയോഗിക്കപ്പെട്ട പ്രവാചകൻ?",
                    options: ["സ്വാലിഹ്", "ഹൂദ്", "ലൂഥ്"],
                    correctAnswer: 0
                },
                {
                    question: "മദ് യനിലെ പ്രവാചകൻ?",
                    options: ["ആർമിയാഅ", "ഷുഹൈബ്", "യൂശഅ"],
                    correctAnswer: 1
                },
                {
                    question: "ഫിർഔനെ മുക്കിയ കടൽ?",
                    options: ["കാസ്പിയൻ", "കരിങ്കടൽ", "ചെങ്കടൽ"],
                    correctAnswer: 2
                },
                {
                    question: "മജൂസികൾ ആര്?",
                    options: ["തീ ആരാധകർ", "കല്ല് ആരാധകർ", "സൂര്യ ആരാധകർ"],
                    correctAnswer: 0
                },
                {
                    question: "ഇസ്ലാമിൽ ഒന്നാമതായി നിർമ്മിക്കപ്പെട്ട പള്ളി?",
                    options: ["മസ്ജിദുൽ അഖ്സ", "മസ്ജിദുൽ ഹറാം", "മസ്ജിദുൽ ഖുബ"],
                    correctAnswer: 2
                },
                {
                    question: "തബൂഖ് യുദ്ധത്തെ കുറിച്ച് പറയുന്ന സൂറത്ത്?",
                    options: ["ഫാത്തിർ", "തൗബ", "ഫുസിലത്"],
                    correctAnswer: 1
                },
                {
                    question: "പടയങ്കിയിൽ പരിഷ്കാരം വരുത്തിയ പ്രവാചകൻ?",
                    options: ["സുലൈമാൻ", "ദാവൂദ്", "ദുൽഖർനൈൻ"],
                    correctAnswer: 1
                },
                {
                    question: "ഇബ്രാഹിം നബി ഇറാഖിൽ നിന്ന് എവിടേക്കാണ് ഹിജ്‌റ പോയത്?",
                    options: ["യസ്രിബ്", "കൂഫ", "ശാം"],
                    correctAnswer: 0
                },
                {
                    question: "അഹ്‌സാബ് യുദ്ധത്തിന്റെ മറ്റൊരു പേര്?",
                    options: ["ബദ്ർ", "ഉഹ്ദ്", "ഖന്തഖ്"],
                    correctAnswer: 2
                },
                {
                    question: "അബുൽ ബശർ എന്ന് അപരനാമം ഉള്ള പ്രവാചകൻ?",
                    options: ["നൂഹ്", "ആദം", "ഇദ് രീസ്"],
                    correctAnswer: 1
                },
                {
                    question: "യഅഖൂബ് നബിയുടെ സന്താനങ്ങൾ?",
                    options: ["14", "12", "16"],
                    correctAnswer: 1
                },
                {
                    question: "മൂസ നബിയുടെ പിതാവിന്റെ പേര്?",
                    options: ["ആസർ", "ഇമ്രാൻ", "മൽക്കാൻ"],
                    correctAnswer: 1
                },
                {
                    question: "അബ്രഹത് ഏത് രാജ്യത്തിന്റെ ഗവർണർ ആയിരുന്നു?",
                    options: ["സിറിയ", "ഇറാഖ്", "യമൻ"],
                    correctAnswer: 2
                }
      ]
    },
    quiz_5: {
      subjectId: "Nahv",
      questions: [
        {
                    question: "اختر الصحيح من فعل المضارع",
                    options: ["قال", "بكى", "يرى"],
                    correctAnswer: 2
                },
                {
                    question: "اختر الصحيح من الاسم",
                    options: ["يرموق", "مرض", "بات"],
                    correctAnswer: 0
                },
                {
                    question: "اختر المبتدأ من الجملة 'البستان جميل' ",
                    options: ["البستان", "جميل", "البستان جميل"],
                    correctAnswer: 0
                },
                {
                    question: "اختر الفاعل من الجملة ' ضرب الأستاد زيدا' ",
                    options: ["ضرب", "الأستاد", "زيد"],
                    correctAnswer: 1
                },
                {
                    question: "اختر المفعول من الجملة 'شتم الرجل الطفل' ",
                    options: ["الطفل", "شتم", "الرجل"],
                    correctAnswer: 0
                },
                {
                    question: "اختر اداة الصحيحة من اخت كان",
                    options: ["ليت", "لعل", "أصبح"],
                    correctAnswer: 2
                },
                {
                    question: "اختر اداة الصحيحة من اخت إنّ",
                    options: ["بات", "صار", "لكن"],
                    correctAnswer: 2
                },
                {
                    question: "'ذهب السارق' هل هذه الجملة مفيدة أو غير مفيدة",
                    options: ["نعم", "لا", "غير"],
                    correctAnswer: 1
                },
                {
                    question: "اختر عبارة الصحيحة",
                    options: ["النعت لا يتبع المنعوت", "يرفع اسم إنّ", "ينصب خبر كان"],
                    correctAnswer: 2
                },
                {
                    question: "هل هذه الجملة صحيحة ام لا ' كان زيداً عالمٌ ' ",
                    options: ["نعم", "لا", "غير"],
                    correctAnswer: 1
                },
                {
                    question: "هل هذه الجملة صحيحة ام لا 'زيدٌ عاقلٌ ' ",
                    options: ["نعم", "لا", "غير"],
                    correctAnswer: 0
                },
                {
                    question: "في اي جملة يشتمل فيها حرف الجر",
                    options: ["رجل عاقل", "متى الساعة", "نظرت الى القمر"],
                    correctAnswer: 2
                },
                {
                    question: "هل هذه الجملة صحيحة ام لا 'زيدٌ في البيتَ ' ",
                    options: ["نعم", "لا", "غير"],
                    correctAnswer: 1
                },
                {
                    question: "وفق بحرف الجر الصحيح ' ذهب التاجر السوق' ",
                    options: ["في", "ب", "إلى"],
                    correctAnswer: 2
                },
                {
                    question: "وفق بحرف الجر الصحيح ' ركبتُ السيارة ' ",
                    options: ["في", "من", "على"],
                    correctAnswer: 2
                },
                {
                    question: "وفق بأداة إنّ الصحيح ' السكر مرّ' ",
                    options: ["ليت", "كأنّ", "لعل"],
                    correctAnswer: 0
                },
                {
                    question: "وفق بأداة إنّ الصحيحة 'طلعت الشمس ..... المطر شديد' ",
                    options: ["لعل", "لكن", "كأن"],
                    correctAnswer: 1
                },
                {
                    question: "لم ولا ناهية وإن",
                    options: ["حروف الرفع", "حروف النصب", "حروف الجزم"],
                    correctAnswer: 2
                },
                {
                    question: "أن، لن، إذن، كي",
                    options: ["حروف النصب", "حروف الرفع", "حروف الجزم"],
                    correctAnswer: 0
                },
                {
                    question: "هل هذه الجملة الصحيحة ام لا 'لن يدرسَ ا' ",
                    options: ["لا", "نعم", "غير"],
                    correctAnswer: 1
                }
      ]
    },
    quiz_6: {
      subjectId: "Swarf",
      questions: [
        {
                    question: "الأفعال كم اقسام",
                    options: ["5", "3", "4"],
                    correctAnswer: 2
                },
                {
                    question: "الماضي كم اقسام",
                    options: ["4", "12", "2"],
                    correctAnswer: 2
                },
                {
                    question: "المعروف كم اوجه",
                    options: ["20", "14", "12"],
                    correctAnswer: 1
                },
                {
                    question: "صيغة وحدان حكاية نفس متكلم از اثبات فعل ماضي معروف ضمير درو أنا",
                    options: ["أفعل", "ما فعلتُ", "فعلتُ"],
                    correctAnswer: 2
                },
                {
                    question: "صيغة تثنية مذكر عائب از اثبات فعل ماضي مجهول ضمير درو هما",
                    options: ["فُعلتا", "فُعلا", "ما فُعلا"],
                    correctAnswer: 1
                },
                {
                    question: "صيفة وحدان مؤنث عائب از اثبات فعل مستقبل معروف ضمير درو هي",
                    options: ["تفعل", "تفعلين", "لا تفعلان"],
                    correctAnswer: 0
                },
                {
                    question: "اختر الضمير الصحيح  ' ما فعلتُ' ",
                    options: ["نحن", "انت", "انا"],
                    correctAnswer: 2
                },
                {
                    question: "اختر الضمير الصحيح ' ما فُعلتْ ' ",
                    options: ["انتِ", "انا", "هي"],
                    correctAnswer: 2
                },
                {
                    question: "اختر الضمير الصحيح ' تفعلين ' ",
                    options: ["هي", "انتِ", "انتم"],
                    correctAnswer: 1
                },
                {
                    question: "اختر الضمير الصحيح ' لا تفعلنَ ' ",
                    options: ["أنتن", "هن", "هم"],
                    correctAnswer: 0
                },
                {
                    question: "اختر الضمير الصحيح ' لم أفعلْ' ",
                    options: ["أنا", "هو", "أنتَ"],
                    correctAnswer: 0
                },
                {
                    question: "صيغة وحدان حكاية نفس متكلم از نفي فعل مستقبل مجهول ضمير درو أنا",
                    options: ["لم أَفعلْ", "لا أُفعلُ", "ما فُعلتُ"],
                    correctAnswer: 1
                },
                {
                    question: "واذا أردت أن تنفي الفعل المستقبل فزد في اوّله ......",
                    options: ["ما", "لم", "لا"],
                    correctAnswer: 2
                },
                {
                    question: "وإذا أردت ان تجعل المستقبل مجهولا فافتح علامة الاستقبال واضمم عين الفعل",
                    options: ["لا صحيح", "صحيح", "غير"],
                    correctAnswer: 0
                },
                {
                    question: "صيغة جمع مؤنث حاضر از نفي فعل مستقبل معروف ضمير درو أنتن",
                    options: ["تفعلن", "فعلن", "لم تفعلن"],
                    correctAnswer: 2
                },
                {
                    question: "اذا أردت ان تجعل الفعل المستقبل على التأكيد مع النفي فادخل عليه .....",
                    options: ["أن", "لن", "إن"],
                    correctAnswer: 1
                },
                {
                    question: "صيغة وحدان مذكر از أمر حاضر ضمير درو أنتَ",
                    options: ["إفعل", "إفعلي", "إفعلوا"],
                    correctAnswer: 0
                },
                {
                    question: "نون التأكيد كم هي",
                    options: ["3", "2", "1"],
                    correctAnswer: 1
                },
                {
                    question: "صيغة جمع مؤنث از نهي حاضر ضمير درو أنتن",
                    options: ["لا تفعلنْ", "ليفعلنّ", "لم تُفعَلنْ"],
                    correctAnswer: 0
                },
                {
                    question: "صيغة وحدان مذكر از اسم المفعول ضمير درو هو",
                    options: ["فاعل", "مفعول", "مفعولة"],
                    correctAnswer: 1
                }
      ]
    },
    quiz_7: {
      subjectId: "Tasawwuf",
      questions: [
        {
                    question: "മസ്നവിയുടെ രചയിതാവ്",
                    options: ["ഇമാം ഗസാലി", "റൂമി", "ഖുശൈരി"],
                    correctAnswer: 1
                },
                {
                    question: "ഇഹ്‌യാ ഉലൂമുദ്ധീ ന്റെ രചയിതാവ്",
                    options: ["റൂമി", "ജുനൈദുൽ ബാഗ്ദാദി", "ഇമാം ഗസാലി"],
                    correctAnswer: 2
                },
                {
                    question: "അൽ ഹികമുൽ അതാഇയ്യ യുടെ രചയിതാവ്",
                    options: ["ഖാജാ ജിഷ്തി അജ്മീരി", "അബ്ദുറഹ്മാൻ അൽ ജാമി", "ഇബ്ൻ അതാഇല്ലാഹി സിക്കന്ദരി"],
                    correctAnswer: 2
                },
                {
                    question: "ബഹ്ജത്തുൽ അസ്റാർ രചിച്ചതാര്",
                    options: ["അബ്ദുറഹ്മാൻ അൽ ജാമി", "മുഹമ്മദ്‌ ഇക്ബാൽ", "ഇബ്ൻ അറബി"],
                    correctAnswer: 0
                },
                {
                    question: "ഫുതൂഹാത്തുൽ മക്കിയ്യ രചിച്ചതാര്",
                    options: ["ഇബ്ൻ അറബി", "മുഹമ്മദ്‌ ഇക്ബാൽ", "ഫരീദദീൻ അത്താർ"],
                    correctAnswer: 0
                },
                {
                    question: "തസ്‌കിറത്തുൽ അവ് ലിയ രചിച്ചതാര്",
                    options: ["ഇമാം ഖുശയ്രി", "ഫരീദദീൻ അത്താർ", "ഇബ്ൻ അറബി"],
                    correctAnswer: 1
                },
                {
                    question: "ഫീഹി മാ ഫീഹി രചിച്ചതാര്",
                    options: ["മുഹമ്മദ്‌ ഇക്ബാൽ", "റൂമി", "ഖുഷയ്രി"],
                    correctAnswer: 1
                },
                {
                    question: "ഖാബ ഖവ്സൈനി രചിച്ചതാര്",
                    options: ["ഇബ്ൻ അറബി", "ജുനൈദുൽ ഭാഗ്ദാദി", "മുഹമ്മദ്‌ ഇക്ബാൽ"],
                    correctAnswer: 2
                },
                {
                    question: "റാബിയ അൽഅദവിയ്യ (ഖ) ജനന വർഷം",
                    options: ["AD 720", "AD 717", "AD 731"],
                    correctAnswer: 1
                },
                {
                    question: "ജുനൈദുൽ ഭാഗ്ദാദി (ഖ) ജനനം",
                    options: ["AD 780", "AD 810", "AD 830"],
                    correctAnswer: 2
                },
                {
                    question: "ഇബ്രാഹിം ബിൻ അധ്ഹം (ഖ) ജനനം",
                    options: ["AD 820", "AD 718", "AD 696"],
                    correctAnswer: 1
                },
                {
                    question: "അബ്ദുൽ ഖാദിർ ജീലാനി (ഖ) ജനനം",
                    options: ["AD 1077", "AD 1091", "AD 1202"],
                    correctAnswer: 0
                },
                {
                    question: "ബാ യാസീദുൽ ബസ്താമി (ഖ) ജനനം",
                    options: ["AD 804", "AD 812", "AD 792"],
                    correctAnswer: 0
                },
                {
                    question: "ജിഷ്തി അജ്മീരി (ഖ) ജനനം",
                    options: ["AD 1124", "AD 1154", "AD 1141"],
                    correctAnswer: 2
                },
                {
                    question: "ജലാലുദ്ധീൻ റൂമി (ഖ) ജനനം",
                    options: ["AD 896", "AD 1207", "AD 1303"],
                    correctAnswer: 1
                },
                {
                    question: "നിസാമുദ്ധീൻ ഔലിയ (ഖ) ജനനം",
                    options: ["AD 1238", "AD 1228", "AD 1218"],
                    correctAnswer: 0
                },
                {
                    question: "അമീർ ഖുസ് റു (ഖ) ജനനം",
                    options: ["AD1229", "AD 1354", "AD 1253"],
                    correctAnswer: 2
                },
                {
                    question: "ശംസുദ്ധീൻ തബ്രീസി (ഖ) യുടെ പ്രദേശം",
                    options: ["ഇറാഖ്", "ഇറാൻ", "ഈജിപ്‌ത്"],
                    correctAnswer: 1
                },
                {
                    question: "അബു ഥാലിബ്‌ അൽ മക്കി (ഖ) യുടെ പ്രദേശം",
                    options: ["ജോർദാൻ", "ഈജിപ്‌ത്", "ഇറാഖ്"],
                    correctAnswer: 2
                },
                {
                    question: "അഹ്മദ് തീജാനി (ഖ) യുടെ പ്രദേശം",
                    options: ["സെർബിയ", "അൽജീരിയ", "മൊറോക്കോ"],
                    correctAnswer: 1
                }
      ]
    },
    quiz_8: {
      subjectId: "Arabic",
      questions: [
        {
                    question: "رأس",
                    options: ["head", "hand", "leg"],
                    correctAnswer: 0
                },
                {
                    question: "صباح الخير",
                    options: ["good evening", "good afternoon", "good morning"],
                    correctAnswer: 2
                },
                {
                    question: "سيارة",
                    options: ["plane", "car", "bike"],
                    correctAnswer: 1
                },
                {
                    question: "قهوة",
                    options: ["coffee", "tea", "juice"],
                    correctAnswer: 0
                },
                {
                    question: "منديل",
                    options: ["cap", "shirt", "towel"],
                    correctAnswer: 2
                },
                {
                    question: "طبيب",
                    options: ["patient", "doctor", "nurse"],
                    correctAnswer: 1
                },
                {
                    question: "ليل",
                    options: ["day", "night", "afternoon"],
                    correctAnswer: 1
                },
                {
                    question: "فم",
                    options: ["mouth", "teeth", "nile"],
                    correctAnswer: 0
                },
                {
                    question: "زهرة",
                    options: ["ground", "flower", "plant"],
                    correctAnswer: 1
                },
                {
                    question: "شارع",
                    options: ["street", "city", "bridge"],
                    correctAnswer: 0
                },
                {
                    question: "مدرسة",
                    options: ["restaurant", "college", "school"],
                    correctAnswer: 2
                },
                {
                    question: "سوق",
                    options: ["market", "place", "field"],
                    correctAnswer: 0
                },
                {
                    question: "مكتبة",
                    options: ["office", "program", "student"],
                    correctAnswer: 0
                },
                {
                    question: "قاعة",
                    options: ["playground", "hall", "science"],
                    correctAnswer: 1
                },
                {
                    question: "لحم",
                    options: ["egg", "meat", "milk"],
                    correctAnswer: 1
                },
                {
                    question: "شرطي",
                    options: ["postman", "engineer", "police"],
                    correctAnswer: 2
                },
                {
                    question: "مطبخ",
                    options: ["garden", "kitchen", "market"],
                    correctAnswer: 1
                },
                {
                    question: "بئر",
                    options: ["river", "sea", "well"],
                    correctAnswer: 2
                },
                {
                    question: "قرية",
                    options: ["village", "city", "town"],
                    correctAnswer: 0
                },
                {
                    question: "غابة",
                    options: ["garden", "field", "forest"],
                    correctAnswer: 2
                }
      ]
    },
    quiz_9: {
      subjectId: "Urdu",
      questions: [
        {
                    question: "چوتھا",
                    options: ["5th", "4th", "6th"],
                    correctAnswer: 1
                },
                {
                    question: "چھٹا",
                    options: ["4th", "8th", "6th"],
                    correctAnswer: 2
                },
                {
                    question: "ساتواں",
                    options: ["3rd", "9th", "7th"],
                    correctAnswer: 2
                },
                {
                    question: "آدھا",
                    options: ["1/2", "1/4", "3/4"],
                    correctAnswer: 0
                },
                {
                    question: "پونا",
                    options: ["1/2", "1/4", "3/4"],
                    correctAnswer: 2
                },
                {
                    question: "ساڑھے",
                    options: ["1 1/2", "2 1/2", "3 1/2"],
                    correctAnswer: 0
                },
                {
                    question: "تھائی",
                    options: ["3/4", "4/5", "2/3"],
                    correctAnswer: 2
                },
                {
                    question: "چوتھائی",
                    options: ["1/4", "1/3", "2/3"],
                    correctAnswer: 0
                },
                {
                    question: "سوا",
                    options: ["1 1/3", "2 1/2", "1 1/4"],
                    correctAnswer: 2
                },
                {
                    question: "پچاس",
                    options: ["45", "50", "55"],
                    correctAnswer: 1
                },
                {
                    question: "چونسٹھ",
                    options: ["84", "74", "64"],
                    correctAnswer: 2
                },
                {
                    question: "تہتر",
                    options: ["43", "73", "52"],
                    correctAnswer: 1
                },
                {
                    question: "چھیاسی",
                    options: ["46", "86", "36"],
                    correctAnswer: 1
                },
                {
                    question: "نواسی",
                    options: ["99", "89", "49"],
                    correctAnswer: 1
                },
                {
                    question: "اٹھانوے",
                    options: ["98", "79", "59"],
                    correctAnswer: 0
                },
                {
                    question: "تریپن",
                    options: ["33", "53", "73"],
                    correctAnswer: 1
                },
                {
                    question: "چھیالیس",
                    options: ["46", "64", "74"],
                    correctAnswer: 0
                },
                {
                    question: "چھتیس",
                    options: ["36", "83", "28"],
                    correctAnswer: 0
                },
                {
                    question: "گیارہ",
                    options: ["11", "12", "13"],
                    correctAnswer: 0
                },
                {
                    question: "انیس",
                    options: ["29", "69", "19"],
                    correctAnswer: 2
                }
      ]
    },
    quiz_10: {
      subjectId: "Malayalam",
      questions: [
        {
                    question: "ആധുനിക മലയാള സാഹിത്യത്തിന്റെ പിതാവ് എന്നറിയപ്പെടുന്നത് ആരാണ്?",
                    options: ["തകഴി", "ബഷീർ", "എം ട്ടി വാസുദേവൻ"],
                    correctAnswer: 0
                },
                {
                    question: "1965-ൽ ജ്ഞാനപീഠ പുരസ്കാരം നേടിയ മലയാളത്തിലെ പ്രശസ്ത കവി?",
                    options: ["കെ സച്ചിദാനന്ദൻ", "ജി ശങ്കര കുറുപ്പ്", "ഒ എൻ വി കുറുപ്പ്"],
                    correctAnswer: 1
                },
                {
                    question: "പ്രശസ്ത മലയാള നോവലായ 'ചെമ്മീൻ' എഴുതിയത് ആരാണ്?",
                    options: ["കമല സുരയ്യ", "തകഴി", "ഒ എൻ വി കുറുപ്പ്"],
                    correctAnswer: 1
                },
                {
                    question: "ബാല്യകാലസഖി' എന്ന കൃതിയിലൂടെ പ്രശസ്തനായ മലയാള എഴുത്തുകാരൻ?",
                    options: ["ബഷീർ", "എം ട്ടി വാസുദേവൻ", "ജി ശങ്കര കുറുപ്പ്"],
                    correctAnswer: 0
                },
                {
                    question: "പ്രശസ്ത മലയാള നോവലായ 'നാലുകെട്ട്' എഴുതിയത് ആരാണ്?",
                    options: ["വൈലോപ്പിള്ളി", "എം ട്ടി വാസുദേവൻ", "അരുന്ധതി റോയ്"],
                    correctAnswer: 1
                },
                {
                    question: "രണ്ടിടങ്ങഴി' എന്ന കൃതിയിലൂടെ പ്രശസ്തനായ മലയാള എഴുത്തുകാരൻ?",
                    options: ["തകഴി", "ആർ കെ നാരായണൻ", "കമല സുരയ്യ"],
                    correctAnswer: 0
                },
                {
                    question: "ഖസക്കിൻ്റെ ഇതിഹാസം' എന്ന പ്രശസ്ത മലയാള നോവലിൻ്റെ രചയിതാവ് ആരാണ്?",
                    options: ["അരുന്ധതി റോയ്", "ഒ വി വിജയൻ", "ആർ കെ നാരായണൻ"],
                    correctAnswer: 1
                },
                {
                    question: "ഒരു ദേശത്തിന്റെ കഥ' എന്ന കൃതിയിലൂടെ പ്രശസ്തനായ മലയാള എഴുത്തുകാരൻ?",
                    options: ["ഒ എൻ വി കുറുപ്പ്", "തകഴി", "എസ് കെ പൊറ്റക്കാട്"],
                    correctAnswer: 2
                },
                {
                    question: "നാലുകെട്ട് എന്ന പ്രശസ്ത മലയാള നോവലിൻ്റെ രചയിതാവ് ആരാണ്??",
                    options: ["എസ് കെ പൊറ്റക്കാട്", "ജുംപ ലാഹിരി", "എം ട്ടി വാസുദേവൻ"],
                    correctAnswer: 2
                },
                {
                    question: "കുന്ദലത' എന്ന കൃതിയിലൂടെ പ്രശസ്തനായ മലയാള എഴുത്തുകാരൻ?",
                    options: ["അപ്പു നെടുങ്ങാടി", "വെയ്ലോപ്പിള്ളി", "ഒ എൻ വി കുറുപ്പ്"],
                    correctAnswer: 0
                },
                {
                    question: "മലയാളത്തിലെ ആദ്യത്തെ നോവൽ ഏതാണ്?",
                    options: ["കുറ്റി", "അടുത്തത്", "കുണ്ഠിലിനി"],
                    correctAnswer: 0
                },
                {
                    question: "ആരോഹണം എഴുതിയത് ആരാണ്?",
                    options: ["കുമാരനാശാൻ", "വി കെ എൻ", "ഒ വി വിജയൻ"],
                    correctAnswer: 1
                },
                {
                    question: "ആരാണ് കുട്ടനാടിന്റെ ഇതിഹാസ കാരൻ",
                    options: ["തുഞ്ചത്തെഴുത്തച്ഛൻ", "തകഴി", "ബഷീർ"],
                    correctAnswer: 1
                },
                {
                    question: "മലയാളത്തിൽ 'ലക്ഷണമോഹ' നോവൽ എന്നറിയപ്പെടുന്നത് ഏത്?",
                    options: ["കുന്ദലത", "അടുത്തത്", "ഷാരധ"],
                    correctAnswer: 1
                },
                {
                    question: "പാത്തുമ്മയുടെ ആടു' എഴുതിയത് ആരാണ്?",
                    options: ["ബഷീർ", "ഉറൂബ്", "ഫിറോസ്"],
                    correctAnswer: 0
                },
                {
                    question: "സ്നാനം എന്നതിന്റെ അർത്ഥം",
                    options: ["പോവുക", "കുളിക്കുക", "തബസ്സിരിക്കുക"],
                    correctAnswer: 1
                },
                {
                    question: "അഭിഷേകം എന്നതിന്റെ അർത്ഥം",
                    options: ["ഊഹം", "സ്വപ്നം", "ഒഴിക്കുക"],
                    correctAnswer: 2
                },
                {
                    question: "ലത എന്നാൽ എന്ത്",
                    options: ["വേര്", "തണ്ട്", "വള്ളി"],
                    correctAnswer: 2
                },
                {
                    question: "ഒരമ്മ പെറ്റ പന്തിര കുലത്തിലെ കഥാപാത്രം",
                    options: ["ബിജു", "നാറാണത് ഭ്രാന്തൻ", "സ്വാമി"],
                    correctAnswer: 1
                },
                {
                    question: " 'ഞാൻ അവനെ അടിച്ചു' എന്നതിൽ ക്രിയ ഏതാണ്?",
                    options: ["ഞാൻ", "അവനെ", "അടിച്ചു"],
                    correctAnswer: 2
                }
      ]
    },
    quiz_11: {
      subjectId: "English",
      questions: [
        {
                    question: "he was a good fighter. what is he?",
                    options: ["noun", "pronoun", "adjective"],
                    correctAnswer: 1
                },
                {
                    question: "soldier killed enemy. select the verb from this",
                    options: ["killed", "soldier", "enemy"],
                    correctAnswer: 0
                },
                {
                    question: "rashid went to school. which noun used here as subject",
                    options: ["to", "school", "rashid"],
                    correctAnswer: 2
                },
                {
                    question: "Bakreed is my favourite day of the year. Which word is the proper noun?",
                    options: ["Bakreed", "year", "my"],
                    correctAnswer: 0
                },
                {
                    question: "The dog ran across the farmyard. select the preposition",
                    options: ["across", "the", "farmyard"],
                    correctAnswer: 0
                },
                {
                    question: "We bought a black cat from the Pets At Home. Which word is the adjective?",
                    options: ["pet", "black", "bought"],
                    correctAnswer: 1
                },
                {
                    question: "Sufyan is singing his favourite song. Which word is the verb?",
                    options: ["is", "favorite", "singing"],
                    correctAnswer: 2
                },
                {
                    question: "I heared a beautiful Qur'an recitation. which word is adjective?",
                    options: ["beautiful", "recitation", "Qur'an"],
                    correctAnswer: 0
                },
                {
                    question: "We went to Hyderabad on wednesday. What type of word is Wednesday?",
                    options: ["noun", "pronoun", "adjective"],
                    correctAnswer: 0
                },
                {
                    question: "The happy frog leaped from leaf to leaf in the pond. What type of word is happy?",
                    options: ["adverb", "preposition", "adjective"],
                    correctAnswer: 2
                },
                {
                    question: "The train reached in Kuttippuram fastly. what type of word is fastly?",
                    options: ["adjective", "conjunction", "adverb"],
                    correctAnswer: 2
                },
                {
                    question: "That car is driving very quickly. which word is adverb in this?",
                    options: ["quickly", "driving", "is"],
                    correctAnswer: 0
                },
                {
                    question: "Birds migrate when it gets cold. Which word is the noun?",
                    options: ["cold", "birds", "when"],
                    correctAnswer: 1
                },
                {
                    question: "He was my old friend. Which word is the pronoun?",
                    options: ["my", "old", "he"],
                    correctAnswer: 2
                },
                {
                    question: "Adam swam amazingly to win a gold medal in the Olympics. What type of word is amazingly?",
                    options: ["interjection", "conjunction", "adverb"],
                    correctAnswer: 2
                },
                {
                    question: "The teacher always tried to solve that problem. What type of word is always?",
                    options: ["verb", "adverb", "adjective"],
                    correctAnswer: 1
                },
                {
                    question: "The boy was happy because he was going fishing with his dad. Which word is the pronoun?",
                    options: ["he", "was", "with"],
                    correctAnswer: 0
                },
                {
                    question: "Suhail gave a gift to teacher. which word is the preposition?",
                    options: ["a", "to", "gave"],
                    correctAnswer: 1
                },
                {
                    question: "rasheed requested to move side. what type of word is requested?",
                    options: ["adverb", "verb", "adjective"],
                    correctAnswer: 1
                },
                {
                    question: "I will go to Delhi. Which word is the proper noun?",
                    options: ["I", "go", "Delhi"],
                    correctAnswer: 2
                }
      ]
    },
    quiz_12: {
      subjectId: "Hindi",
      questions: [
        {
                    question: "Select the correct (नमस्ते)",
                    options: ["hello", "welcome", "thanks"],
                    correctAnswer: 0
                },
                {
                    question: "Select the correct (स्वागत)",
                    options: ["good bye", "see you", "welcome"],
                    correctAnswer: 2
                },
                {
                    question: "Select the correct (धन्यवाद)",
                    options: ["please", "thank you", "sorry"],
                    correctAnswer: 0
                },
                {
                    question: "Select the correct (माफ़ करना)",
                    options: ["little", "good afternoon", "sorry"],
                    correctAnswer: 2
                },
                {
                    question: "Select the correct (सुसंध्या)",
                    options: ["good morning", "good evening", "good night"],
                    correctAnswer: 1
                },
                {
                    question: "Select the correct (फिर मिलेंगे)",
                    options: ["see you", "good bye", "tomorrow"],
                    correctAnswer: 0
                },
                {
                    question: "Select the correct (सुंदर)",
                    options: ["fast", "beautiful", "revenge"],
                    correctAnswer: 1
                },
                {
                    question: "Select the correct (आशा)",
                    options: ["need", "hope", "today"],
                    correctAnswer: 1
                },
                {
                    question: "Select the correct (रैना)",
                    options: ["day", "night", "evening"],
                    correctAnswer: 1
                },
                {
                    question: "Select the correct (चलो)",
                    options: ["let's go", "stop there", "running"],
                    correctAnswer: 0
                },
                {
                    question: "Select the correct (रुको)",
                    options: ["bye", "stop", "super"],
                    correctAnswer: 1
                },
                {
                    question: "Select the correct (अच्छा)",
                    options: ["good", "bad", "nothing"],
                    correctAnswer: 0
                },
                {
                    question: "Select the correct (खाना)",
                    options: ["water", "juice", "food"],
                    correctAnswer: 2
                },
                {
                    question: "Select the correct (आज)",
                    options: ["today", "yesterday", "tomorrow"],
                    correctAnswer: 0
                },
                {
                    question: "Select the correct (खेलो)",
                    options: ["eat", "drink", "play"],
                    correctAnswer: 2
                },
                {
                    question: "Select the correct (पानी)",
                    options: ["grape", "water", "orange"],
                    correctAnswer: 1
                },
                {
                    question: "Select the correct (भाई)",
                    options: ["mom", "brother", "bap"],
                    correctAnswer: 1
                },
                {
                    question: "Select the correct (बहन)",
                    options: ["daughter", "mom", "sister"],
                    correctAnswer: 2
                },
                {
                    question: "Select the correct (परिवार)",
                    options: ["school", "family", "market"],
                    correctAnswer: 1
                },
                {
                    question: "Select the correct (मोहब्बत)",
                    options: ["hate", "ego", "love"],
                    correctAnswer: 2
                }
      ]
    },
    quiz_13: {
      subjectId: "Mathematics",
      questions: [
        {
                    question: "6+5?",
                    options: ["20", "13", "11"],
                    correctAnswer: 2
                },
                {
                    question: "7+18?",
                    options: ["25", "31", "22"],
                    correctAnswer: 0
                },
                {
                    question: "6×7?",
                    options: ["54", "38", "42"],
                    correctAnswer: 2
                },
                {
                    question: "25+39?",
                    options: ["74", "64", "58"],
                    correctAnswer: 1
                },
                {
                    question: "12÷3?",
                    options: ["4", "3", "6"],
                    correctAnswer: 0
                },
                {
                    question: "56÷7?",
                    options: ["6", "7", "8"],
                    correctAnswer: 2
                },
                {
                    question: "80÷8?",
                    options: ["11", "10", "9"],
                    correctAnswer: 1
                },
                {
                    question: "72-9?",
                    options: ["63", "58", "61"],
                    correctAnswer: 0
                },
                {
                    question: "44-7?",
                    options: ["35", "37", "39"],
                    correctAnswer: 1
                },
                {
                    question: "60-13?",
                    options: ["37", "57", "47"],
                    correctAnswer: 2
                },
                {
                    question: "2,4,6,8,_?",
                    options: ["10", "12", "9"],
                    correctAnswer: 0
                },
                {
                    question: "7,10,13,16,_?",
                    options: ["18", "19", "20"],
                    correctAnswer: 1
                },
                {
                    question: "2,0,-2,-4,_?",
                    options: ["-3", "-5", "-6"],
                    correctAnswer: 2
                },
                {
                    question: "-4,8,16,_?",
                    options: ["24", "20", "26"],
                    correctAnswer: 0
                },
                {
                    question: "3/7+4/7?",
                    options: ["6/7", "7/7", "8/7"],
                    correctAnswer: 1
                },
                {
                    question: "5/8+2/8?",
                    options: ["6/8", "7/8", "8/8"],
                    correctAnswer: 1
                },
                {
                    question: "1/4,1/2  which is the great?",
                    options: ["1/4", "both are equal", "1/2"],
                    correctAnswer: 2
                },
                {
                    question: "3/4,6/12 which is the great?",
                    options: ["both are equal", "3/4", "6/12"],
                    correctAnswer: 1
                },
                {
                    question: "3 1/4 =?",
                    options: ["12/4", "13/4", "11/4"],
                    correctAnswer: 1
                },
                {
                    question: "100×100?",
                    options: ["10,000", "1,00,000", "10,00,000"],
                    correctAnswer: 0
                }
      ]
    },
    quiz_14: {
      subjectId: "Social Science",
      questions: [
        {
                    question: "What is history?",
                    options: ["Study of stars", "Study of past events", "Study of animals"],
                    correctAnswer: 1
                },
                {
                    question: "Who are archaeologists?",
                    options: ["People who write books", "People who study old coins and buildings", "People who make laws"],
                    correctAnswer: 1
                },
                {
                    question: "What are manuscripts?",
                    options: ["Printed books", "Newspaper articles", "Handwritten records"],
                    correctAnswer: 2
                },
                {
                    question: "The word 'India' comes from which river's name?",
                    options: ["Ganga", "Narmada", "Indus"],
                    correctAnswer: 2
                },
                {
                    question: "The earliest people lived near which type of place?",
                    options: ["rivers", "mountains", "deserts"],
                    correctAnswer: 0
                },
                {
                    question: "What does BC stand for in history?",
                    options: ["Before Coffee", "Before Christ", "Before Calendar"],
                    correctAnswer: 1
                },
                {
                    question: "What did early humans use for tools?",
                    options: ["iron", "plastic", "stone"],
                    correctAnswer: 2
                },
                {
                    question: "In which age did people start farming?",
                    options: ["ice age", "stone age", "modern age"],
                    correctAnswer: 1
                },
                {
                    question: "Which material was used to make tools in the Neolithic age?",
                    options: ["Bronze", "Plastic", "Polished stone"],
                    correctAnswer: 2
                },
                {
                    question: "The Harappan cities were known for their:",
                    options: ["Big markets", "Planned layout and drainage system", "Temples"],
                    correctAnswer: 1
                },
                {
                    question: "Which animal was important in Harappan culture?",
                    options: ["tiger", "elephant", "bull"],
                    correctAnswer: 2
                },
                {
                    question: "Who discovered Harappa?",
                    options: ["R.D. Banerji", "Ashoka", "Mourya"],
                    correctAnswer: 0
                },
                {
                    question: "Vedas are written in which language?",
                    options: ["Tamil", "Hindi", "Sanskrit"],
                    correctAnswer: 2
                },
                {
                    question: "Which Veda is the oldest?",
                    options: ["Sama Veda", "Rigveda", "Yajur Veda"],
                    correctAnswer: 1
                },
                {
                    question: "Who composed the Rigveda?",
                    options: ["Farmers", "priests", "kings"],
                    correctAnswer: 1
                },
                {
                    question: "The Janapadas were:",
                    options: ["Forests", "Villages", "Small kingdoms"],
                    correctAnswer: 2
                },
                {
                    question: "Magadha was located in which part of India?",
                    options: ["North-East", "South", "West"],
                    correctAnswer: 0
                },
                {
                    question: "Ashoka belonged to which dynasty?",
                    options: ["Maurya", "Gupta", "Mughal"],
                    correctAnswer: 0
                },
                {
                    question: "Who was the founder of Buddhism?",
                    options: ["Mahavira", "Ashoka", "Gautama Buddha"],
                    correctAnswer: 2
                },
                {
                    question: "What does AD stand for?",
                    options: ["After Date", "Anno Domini", "Ancient Day"],
                    correctAnswer: 1
                }
      ]
    },
    quiz_15: {
      subjectId: "Computer",
      questions: [
        {
                    question: "What does IT stand for?",
                    options: ["Internet Team", "Information Technology", "Internal Tool"],
                    correctAnswer: 1
                },
                {
                    question: "Which device is used to input data into a computer?",
                    options: ["Monitor", "Keyboard", "Printer"],
                    correctAnswer: 1
                },
                {
                    question: "What is the brain of the computer?",
                    options: ["Monitor", "UPS", "CPU"],
                    correctAnswer: 2
                },
                {
                    question: "Which one is an output device?",
                    options: ["Mouse", "Scanner", "Printer"],
                    correctAnswer: 2
                },
                {
                    question: "Which of the following stores data permanently?",
                    options: ["RAM", "Hard Disk", "ROM"],
                    correctAnswer: 1
                },
                {
                    question: "What does CPU stand for?",
                    options: ["Central Processing Unit", "Computer Power Unit", "Control Program Unit"],
                    correctAnswer: 0
                },
                {
                    question: "Which software helps to browse the internet?",
                    options: ["MS Word", "Chrome", "Paint"],
                    correctAnswer: 1
                },
                {
                    question: "What is the full form of URL?",
                    options: ["Uniform Resource Locator", "Universal Record Link", "Unique Reference Link"],
                    correctAnswer: 0
                },
                {
                    question: "What is the full form of Wi-Fi?",
                    options: ["Wireless Finder", "Wide Fidelity", "Wireless Fidelity"],
                    correctAnswer: 2
                },
                {
                    question: "Which device is used to click and select on screen?",
                    options: ["Keyboard", "CPU", "Mouse"],
                    correctAnswer: 2
                },
                {
                    question: "What is software?",
                    options: ["A physical part", "A program that runs on a computer", "A storage device"],
                    correctAnswer: 1
                },
                {
                    question: "What is an example of an operating system?",
                    options: ["Windows", "Google", "Excel"],
                    correctAnswer: 0
                },
                {
                    question: "What does HTTP stand for?",
                    options: ["Hyper Type Text Protocol", "Hypertext Transfer Protocol", "Home Transfer Text Program"],
                    correctAnswer: 1
                },
                {
                    question: "Which part displays the output?",
                    options: ["Monitor", "Speaker", "Headset"],
                    correctAnswer: 0
                },
                {
                    question: "What is the main page of a website called?",
                    options: ["Link page", "First page", "Home page"],
                    correctAnswer: 2
                },
                {
                    question: "What is the use of MS Word?",
                    options: ["Watching movies", "Making documents", "Listening to music"],
                    correctAnswer: 1
                },
                {
                    question: "What is the full form of PDF?",
                    options: ["Portable Document Format", "Print Document File", "Page Data Format"],
                    correctAnswer: 0
                },
                {
                    question: "Which of these is a search engine?",
                    options: ["Gmail", "Google", "YouTube"],
                    correctAnswer: 1
                },
                {
                    question: "What does RAM stand for?",
                    options: ["Read Access Memory", "Random Access Memory", "Random Application Module"],
                    correctAnswer: 1
                },
                {
                    question: "Who is known as the 'Father of the Computer'?",
                    options: ["Charles Babbage", "Alan Turing", "Bill Gates"],
                    correctAnswer: 0
                }
      ]
    },
    quiz_16: {
      subjectId: "Science",
      questions: [
        {
                    question: "What do plants need to make food?",
                    options: ["Sunlight", "Moonlight", "Wind"],
                    correctAnswer: 0
                },
                {
                    question: "Which gas do we breathe in to stay alive?",
                    options: ["Oxygen", "Carbon dioxide", "Nitrogen"],
                    correctAnswer: 0
                },
                {
                    question: "What is the name of our galaxy?",
                    options: ["Milky Way", "Andromeda", "Triangulum"],
                    correctAnswer: 0
                },
                {
                    question: "Water boils at:",
                    options: ["0°C", "50°C", "100°C"],
                    correctAnswer: 2
                },
                {
                    question: "Which part of the plant absorbs water?",
                    options: ["Leaf", "Root", "Flower"],
                    correctAnswer: 1
                },
                {
                    question: "The Earth revolves around the:",
                    options: ["Moon", "Sun", "Mars"],
                    correctAnswer: 1
                },
                {
                    question: "The hardest natural substance is:",
                    options: ["Gold", "Iron", "Diamond"],
                    correctAnswer: 2
                },
                {
                    question: "Which phenomenon occurs when the Moon passes between the Sun and Earth?",
                    options: ["Transit", "Lunar eclipse", "Solar eclipse"],
                    correctAnswer: 2
                },
                {
                    question: "Which organ pumps blood in our body?",
                    options: ["Lungs", "Heart", "Brain"],
                    correctAnswer: 1
                },
                {
                    question: "Which planet is known as the 'Red Planet'?",
                    options: ["Mars", "Venus", "Jupiter"],
                    correctAnswer: 0
                },
                {
                    question: "What do we use to see tiny things?",
                    options: ["Telescope", "Microscope", "Camera"],
                    correctAnswer: 1
                },
                {
                    question: "Which of the following is a solid?",
                    options: ["Milk", "Stone", "Water"],
                    correctAnswer: 1
                },
                {
                    question: "What is the study of the universe beyond Earth's atmosphere called?",
                    options: ["Science", "Astrology", "Cosmology"],
                    correctAnswer: 0
                },
                {
                    question: "Which of these is a sense organ?",
                    options: ["Hair", "Bone", "Nose"],
                    correctAnswer: 2
                },
                {
                    question: "How many bones are there in an adult human body?",
                    options: ["300", "206", "258"],
                    correctAnswer: 1
                },
                {
                    question: "Which vitamin do we get from sunlight?",
                    options: ["Vitamin C", "Vitamin D", "Vitamin A"],
                    correctAnswer: 1
                },
                {
                    question: "What is H2O?",
                    options: ["Salt", "Oxygen", "Water"],
                    correctAnswer: 2
                },
                {
                    question: "Which is a liquid?",
                    options: ["Ice", "Steam", "Milk"],
                    correctAnswer: 2
                },
                {
                    question: "What is a black hole?",
                    options: ["A region of space with gravity so strong that nothing can escape", "A type of star", "An empty region in space"],
                    correctAnswer: 0
                },
                {
                    question: "What helps plants to grow?",
                    options: ["Rocks, plastic, wind", "Cement, water, sun", "Soil, water, sunlight"],
                    correctAnswer: 2
                }
      ]
    }
  }
};

// ==================== STATE MANAGEMENT ====================
const USER_STATE = PropertiesService.getScriptProperties();

function setUserState(chatId, state) {
  USER_STATE.setProperty(chatId.toString(), JSON.stringify(state));
}

function getUserState(chatId) {
  const state = USER_STATE.getProperty(chatId.toString());
  return state ? JSON.parse(state) : {};
}

function clearUserState(chatId) {
  USER_STATE.deleteProperty(chatId.toString());
}

function resetUserQuizProgress(chatId) {
  const state = getUserState(chatId);
  delete state.completedSubjects;
  delete state.quizScores;
  delete state.currentIndex;
  delete state.score;
  delete state.quizKey;
  delete state.subjectId;
  setUserState(chatId, state);
}

// ==================== TELEGRAM HANDLER ====================
function doPost(e) {
  try {
    const contents = JSON.parse(e.postData.contents);
    const message = contents.message;
    const callbackQuery = contents.callback_query;

    // Handle start command
    if (message && message.text === "/start") {
      handleStartCommand(message);
      return;
    }

    // Handle text messages
    if (message && message.text) {
      handleTextMessage(message);
      return;
    }

    // Handle quiz callbacks
    if (callbackQuery && callbackQuery.data.startsWith("quiz_")) {
      handleQuizSelection(callbackQuery);
      return;
    }

    // Handle answer callbacks
    if (callbackQuery && callbackQuery.data.startsWith("answer_")) {
      handleAnswerSelection(callbackQuery);
      return;
    }

    // Handle registration callback
    if (callbackQuery && callbackQuery.data === "register_user") {
      handleRegistration(callbackQuery);
      return;
    }

    // Handle back to menu callback
    if (callbackQuery && callbackQuery.data === "back_to_menu") {
      deleteInlineButtons(callbackQuery.message);
      sendMainMenu(callbackQuery.from.id);
      return;
    }

  } catch (error) {
    console.error("Error in doPost:", error);
  }
}

// ==================== MESSAGE HANDLERS ====================
function handleStartCommand(message) {
  const chatId = message.chat.id;
  const name = message.from.first_name || "User";
  const welcomeMsg = `🌟 Welcome ${name} to QUAF DHDC\nQualitative Union For Academic Focus\n27th batch of Darul Hidaya Da'wa College, Manoor`;
  
  sendText(chatId, welcomeMsg);
  sendRegistrationButton(chatId);
}

function handleTextMessage(message) {
  const chatId = message.chat.id;
  const name = message.from.first_name || "User";
  const text = message.text.toLowerCase().trim();

  // Greeting
  if (text === "hi" || text === "hello") {
    sendText(chatId, `👋 Hello ${name}!`);
    return;
  }

  // Quiz commands - MULTIPLE WAYS TO START
  if (text === "/quiz" || text === "start quiz" || text === "🎯 start quiz") {
    sendQuizMenu(chatId);
    return;
  }

  // Restart command - Reset all progress
  if (text === "/restart") {
    resetUserQuizProgress(chatId);
    sendText(chatId, "🔄 All quiz progress has been reset! You can now retake all quizzes.");
    setTimeout(() => {
      sendQuizMenu(chatId);
    }, 1500);
    return;
  }

  // Social media menu
  if (text === "/socialmedia" || text === "📲 social media") {
    sendSocialMediaMenu(chatId);
    return;
  }

  // Social media platform handlers
  const socialMediaHandlers = {
    "facebook": "🔗 Facebook: https://www.facebook.com/people/Quafdhdc/61576548098341/",
    "whatsapp": "🔗 WhatsApp: https://wa.me/message/76OKA3KAKHINC1",
    "instagram": "🔗 Instagram: https://www.instagram.com/quafdhdc/",
    "youtube": "🔗 YouTube: https://www.youtube.com/@quaf-dhdc",
    "threads": "🔗 Threads: https://www.threads.com/@quafdhdc?invite=0",
    "telegram channel": "🔗 Telegram Channel: https://t.me/quafdhdc"
  };

  if (socialMediaHandlers[text]) {
    sendText(chatId, socialMediaHandlers[text]);
    return;
  }

  // Back to menu
  if (text === "back to menu" || text === "🏠 main menu") {
    sendMainMenu(chatId);
    return;
  }

  // Thank you responses
  if (text === "thanks" || text === "thank you") {
    sendText(chatId, "🙏 You're welcome!");
    return;
  }

  // Help command
  if (text === "/help") {
    const helpText = `🤖 <b>Available Commands:</b>

• /start - Welcome message & registration
• /quiz - Start/continue quizzes
• /restart - Reset all quiz progress
• /socialmedia - See our social platforms
• /help - Show this help message

📱 <b>Quiz Features:</b>
• Take quizzes one by one
• See results after completing all subjects
• Retake quizzes anytime with /restart

Use the menu buttons for easy navigation! 👇`;
    
    sendText(chatId, helpText);
    sendMainMenu(chatId);
    return;
  }

  // Unknown command fallback
  const fallbackMsg = `🤖 Sorry, I didn't understand that.

<b>Available commands:</b>
• /start - Welcome message
• /quiz - Start quizzes  
• /restart - Reset quiz progress
• /socialmedia - See our social platforms
• /help - Show help

Or use the menu buttons below! 👇`;
  
  sendText(chatId, fallbackMsg);
  sendMainMenu(chatId);
}

function handleQuizSelection(callbackQuery) {
  deleteInlineButtons(callbackQuery.message);

  const chatId = callbackQuery.from.id;
  const quizKey = callbackQuery.data;
  const quiz = CONFIG.QUIZ_DATA[quizKey];
  
  if (quiz) {
    const state = getUserState(chatId);
    state.subjectId = quiz.subjectId;
    state.quizKey = quizKey;
    state.currentIndex = 0;
    state.score = 0;
    state.startTime = new Date().getTime();
    setUserState(chatId, state);
    
    // Send quiz start message
    const startMsg = `📚 <b>${quiz.subjectId} Quiz</b>

🎯 Total Questions: ${quiz.questions.length}
⏱️ Answer each question carefully
📊 Results will be shown after completion

Let's begin! 🚀`;
    
    sendText(chatId, startMsg);
    
    setTimeout(() => {
      sendQuizQuestion(chatId, quiz.questions[0], 0);
    }, 2000);
  } else {
    sendText(chatId, "❌ Quiz not found. Please try again.");
    sendQuizMenu(chatId);
  }
}

function handleAnswerSelection(callbackQuery) {
  deleteInlineButtons(callbackQuery.message);

  const chatId = callbackQuery.from.id;
  const answerIndex = parseInt(callbackQuery.data.split("_")[1]);
  const state = getUserState(chatId);
  
  if (!state || !state.quizKey) {
    sendText(chatId, "❌ Session expired. Please start a new quiz.");
    sendQuizMenu(chatId);
    return;
  }

  const quiz = CONFIG.QUIZ_DATA[state.quizKey];
  if (!quiz || !quiz.questions[state.currentIndex]) {
    sendText(chatId, "❌ Quiz error. Please start a new quiz.");
    sendQuizMenu(chatId);
    return;
  }

  const question = quiz.questions[state.currentIndex];
  const isCorrect = (answerIndex === question.correctAnswer);

  // Show immediate feedback
  if (isCorrect) {
    state.score += 1;
    sendText(chatId, "✅ Correct!");
  } else {
    sendText(chatId, `❌ Incorrect!\n\n💡 Correct answer: <b>${question.options[question.correctAnswer]}</b>`);
  }

  state.currentIndex += 1;
  setUserState(chatId, state);

  // Check if quiz is complete
  if (state.currentIndex < quiz.questions.length) {
    // Send next question after delay
    setTimeout(() => {
      sendQuizQuestion(chatId, quiz.questions[state.currentIndex], state.currentIndex);
    }, 2500);
  } else {
    // Quiz completed
    setTimeout(() => {
      handleQuizCompletion(callbackQuery, state);
    }, 2000);
  }
}

function handleQuizCompletion(callbackQuery, state) {
  const chatId = callbackQuery.from.id;
  const quiz = CONFIG.QUIZ_DATA[state.quizKey];
  const total = quiz.questions.length;
  const percent = Math.round((state.score / total) * 100);
  const endTime = new Date().getTime();
  const timeTaken = Math.round((endTime - state.startTime) / 1000); // seconds
  
  // Store quiz score
  const userState = getUserState(chatId);
  if (!userState.quizScores) {
    userState.quizScores = {};
  }
  userState.quizScores[state.quizKey] = {
    score: state.score,
    total: total,
    percent: percent,
    timeTaken: timeTaken,
    completedAt: new Date()
  };
  
  // Mark as completed
  const completed = userState.completedSubjects || [];
  if (!completed.includes(state.quizKey)) {
    completed.push(state.quizKey);
  }
  userState.completedSubjects = completed;
  
  // Clear current quiz state
  delete userState.currentIndex;
  delete userState.score;
  delete userState.quizKey;
  delete userState.subjectId;
  delete userState.startTime;
  
  setUserState(chatId, userState);
  
  // Show individual quiz result
  let resultMessage = `🎉 <b>${quiz.subjectId} Quiz Completed!</b>\n\n`;
  resultMessage += `📊 <b>Your Results:</b>\n`;
  resultMessage += `• Score: ${state.score}/${total} (${percent}%)\n`;
  resultMessage += `• Time: ${Math.floor(timeTaken / 60)}m ${timeTaken % 60}s\n\n`;
  
  // Add performance message
  if (percent >= 90) {
    resultMessage += `🏆 Excellent work!`;
  } else if (percent >= 70) {
    resultMessage += `👏 Good job!`;
  } else if (percent >= 50) {
    resultMessage += `👍 Not bad, keep practicing!`;
  } else {
    resultMessage += `📚 Keep studying and try again!`;
  }
  
  sendText(chatId, resultMessage);
  
  // Log individual quiz
  logEvent({
    type: "Quiz",
    chatId,
    name: callbackQuery.from.first_name || "",
    username: callbackQuery.from.username || "",
    subjectId: quiz.subjectId,
    score: state.score,
    total,
    percent
  });

  // Check if all quizzes are completed
  const totalQuizzes = Object.keys(CONFIG.QUIZ_DATA).length;
  const completedCount = completed.length;
  
  if (completedCount >= totalQuizzes) {
    // All quizzes completed - show final results
    setTimeout(() => {
      showFinalResults(chatId, userState.quizScores);
    }, 3000);
  } else {
    // Show remaining quizzes
    setTimeout(() => {
      const remainingMsg = `🔄 <b>Great progress!</b>\n\nCompleted: ${completedCount}/${totalQuizzes} quizzes\n\nReady for the next quiz? 🚀`;
      sendText(chatId, remainingMsg);
      
      setTimeout(() => {
        sendQuizMenu(chatId);
      }, 2000);
    }, 3000);
  }
}

function showFinalResults(chatId, quizScores) {
  let finalMsg = `🎊 <b>CONGRATULATIONS!</b> 🎊\n\n`;
  finalMsg += `🏆 <b>All Quizzes Completed!</b>\n\n`;
  finalMsg += `📈 <b>Overall Results:</b>\n`;
  
  let totalScore = 0;
  let totalQuestions = 0;
  let totalTime = 0;
  
  Object.entries(quizScores).forEach(([quizKey, result]) => {
    const quiz = CONFIG.QUIZ_DATA[quizKey];
    finalMsg += `\n📘 <b>${quiz.subjectId}:</b> ${result.score}/${result.total} (${result.percent}%)`;
    totalScore += result.score;
    totalQuestions += result.total;
    totalTime += result.timeTaken;
  });
  
  const overallPercent = Math.round((totalScore / totalQuestions) * 100);
  
  finalMsg += `\n\n🎯 <b>Overall Score:</b> ${totalScore}/${totalQuestions} (${overallPercent}%)`;
  finalMsg += `\n⏱️ <b>Total Time:</b> ${Math.floor(totalTime / 60)}m ${totalTime % 60}s`;
  
  finalMsg += `\n\n`;
  if (overallPercent >= 90) {
    finalMsg += `🌟 Outstanding performance! You're a quiz master! 🌟`;
  } else if (overallPercent >= 80) {
    finalMsg += `🎖️ Excellent work! Great knowledge! 🎖️`;
  } else if (overallPercent >= 70) {
    finalMsg += `👏 Good job! Keep up the good work! 👏`;
  } else {
    finalMsg += `📚 Good effort! Keep learning and improving! 📚`;
  }
  
  finalMsg += `\n\n💡 Use /restart to retake all quizzes anytime!`;
  
  sendText(chatId, finalMsg);
  
  // Log final results
  logEvent({
    type: "Final Results",
    chatId,
    name: "",
    username: "",
    subjectId: "All Subjects",
    score: totalScore,
    total: totalQuestions,
    percent: overallPercent
  });
  
  setTimeout(() => {
    sendMainMenu(chatId);
  }, 5000);
}

function handleRegistration(callbackQuery) {
  deleteInlineButtons(callbackQuery.message);

  const chatId = callbackQuery.from.id;
  const name = callbackQuery.from.first_name || "Unknown";
  const username = callbackQuery.from.username || "";
  
  logEvent({
    type: "Registration",
    chatId,
    name,
    username
  });

  sendText(chatId, "✅ Registration completed successfully!");
  setTimeout(() => {
    sendMainMenu(chatId);
  }, 1500);
}

// ==================== SENDERS ====================
function sendText(chatId, text) {
  const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/sendMessage`;
  const payload = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: "HTML"
    })
  };
  
  try {
    UrlFetchApp.fetch(url, payload);
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

function sendRegistrationButton(chatId) {
  const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/sendMessage`;
  const keyboard = {
    inline_keyboard: [
      [{ text: "✅ Register Now", callback_data: "register_user" }]
    ]
  };
  const payload = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({
      chat_id: chatId,
      text: "📝 Please complete your registration to access all features:",
      reply_markup: keyboard
    })
  };
  
  try {
    UrlFetchApp.fetch(url, payload);
  } catch (error) {
    console.error("Error sending registration button:", error);
  }
}

function sendSocialMediaMenu(chatId) {
  const keyboard = {
    keyboard: [
      [{ text: "Facebook" }, { text: "WhatsApp" }],
      [{ text: "Instagram" }, { text: "YouTube" }],
      [{ text: "Threads" }, { text: "Telegram Channel" }],
      [{ text: "🏠 Main Menu" }]
    ],
    resize_keyboard: true,
    one_time_keyboard: true
  };

  const msg = "📲 Choose a platform to connect with us:";
  sendKeyboard(chatId, msg, keyboard);
}

function sendMainMenu(chatId) {
  const keyboard = {
    keyboard: [
      [{ text: "🎯 Start Quiz" }],
      [{ text: "📲 Social Media" }],
      [{ text: "/help" }, { text: "/restart" }]
    ],
    resize_keyboard: true,
    one_time_keyboard: false
  };

  sendKeyboard(chatId, "🏠 Main Menu - Choose an option:", keyboard);
}

function sendQuizMenu(chatId) {
  const state = getUserState(chatId) || {};
  const completed = state.completedSubjects || [];

  if (!CONFIG.QUIZ_DATA || Object.keys(CONFIG.QUIZ_DATA).length === 0) {
    sendText(chatId, "❌ No quizzes are currently available. Please check back later!");
    sendMainMenu(chatId);
    return;
  }

  const totalQuizzes = Object.keys(CONFIG.QUIZ_DATA).length;
  const completedCount = completed.length;

  // Show progress
  let menuText = `📚 <b>Quiz Center</b>\n\n`;
  menuText += `📊 Progress: ${completedCount}/${totalQuizzes} completed\n\n`;
  
  if (completedCount > 0) {
    menuText += `✅ <b>Completed:</b>\n`;
    completed.forEach(quizKey => {
      const quiz = CONFIG.QUIZ_DATA[quizKey];
      if (quiz && state.quizScores && state.quizScores[quizKey]) {
        const score = state.quizScores[quizKey];
        menuText += `• ${quiz.subjectId}: ${score.score}/${score.total} (${score.percent}%)\n`;
      }
    });
    menuText += `\n`;
  }

  const availableQuizzes = Object.entries(CONFIG.QUIZ_DATA).map(([key, quiz]) => {
    const isCompleted = completed.includes(key);
    const status = isCompleted ? "🔄 Retake" : "📘 Start";
    return [{ text: `${status} ${quiz.subjectId}`, callback_data: key }];
  });

  if (completedCount >= totalQuizzes) {
    menuText += `🎉 All quizzes completed! Use /restart to reset progress or retake any quiz:`;
  } else {
    menuText += `🚀 Choose a quiz to continue:`;
  }

  // Add back button
  availableQuizzes.push([{ text: "🏠 Back to Main Menu", callback_data: "back_to_menu" }]);

  const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/sendMessage`;
  const keyboard = { inline_keyboard: availableQuizzes };

  const payload = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({
      chat_id: chatId,
      text: menuText,
      reply_markup: keyboard,
      parse_mode: "HTML"
    })
  };
  
  try {
    UrlFetchApp.fetch(url, payload);
  } catch (error) {
    console.error("Error sending quiz menu:", error);
  }
}

function sendQuizQuestion(chatId, questionObj, index) {
  if (!questionObj || !questionObj.options) {
    sendText(chatId, "❌ Question error. Please try again.");
    sendQuizMenu(chatId);
    return;
  }

  const keyboard = {
    inline_keyboard: questionObj.options.map((opt, i) => [{
      text: `${String.fromCharCode(65 + i)}) ${opt}`, // A), B), C), D)
      callback_data: `answer_${i}`
    }])
  };
  
  const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/sendMessage`;
  const payload = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({
      chat_id: chatId,
      text: `❓ <b>Question ${index + 1}:</b>\n\n${questionObj.question}`,
      reply_markup: keyboard,
      parse_mode: "HTML"
    })
  };
  
  try {
    UrlFetchApp.fetch(url, payload);
  } catch (error) {
    console.error("Error sending quiz question:", error);
  }
}

function sendKeyboard(chatId, text, keyboard) {
  const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/sendMessage`;
  const payload = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({
      chat_id: chatId,
      text: text,
      reply_markup: keyboard
    })
  };
  
  try {
    UrlFetchApp.fetch(url, payload);
  } catch (error) {
    console.error("Error sending keyboard:", error);
  }
}

function deleteInlineButtons(message) {
  const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/editMessageReplyMarkup`;
  const payload = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({
      chat_id: message.chat.id,
      message_id: message.message_id,
      reply_markup: { inline_keyboard: [] }
    })
  };
  
  try {
    UrlFetchApp.fetch(url, payload);
  } catch (error) {
    console.error("Error deleting inline buttons:", error);
  }
}

// ==================== LOGGING ====================
function logEvent({ type, chatId, name, username, subjectId = "", score = "", total = "", percent = "" }) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.LOG_SHEET);
    if (!sheet) {
      console.error("Log sheet not found:", CONFIG.LOG_SHEET);
      return;
    }
    
    const now = new Date();
    sheet.appendRow([now, chatId, name, username, type, subjectId, score, total, percent]);
  } catch (error) {
    console.error("Error logging event:", error);
  }
}

// ==================== UTILITY FUNCTIONS ====================
function testBot() {
  console.log("🤖 Bot Configuration Test:");
  console.log("BOT_TOKEN configured:", CONFIG.BOT_TOKEN && CONFIG.BOT_TOKEN !== "YOUR_BOT_TOKEN_HERE" ? "✅ Yes" : "❌ No");
  console.log("LOG_SHEET configured:", CONFIG.LOG_SHEET ? "✅ Yes" : "❌ No");
  console.log("QUIZ_DATA configured:", Object.keys(CONFIG.QUIZ_DATA).length > 0 ? "✅ Yes" : "❌ No");
  console.log("Available quizzes:", Object.keys(CONFIG.QUIZ_DATA).length);
  
  // Test spreadsheet access
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.LOG_SHEET);
    console.log("Sheet access:", sheet ? "✅ Success" : "❌ Failed");
  } catch (error) {
    console.log("Sheet access: ❌ Error -", error.message);
  }
}

// Function to set up the bot (run once)
function setupBot() {
  console.log("Setting up bot...");
  
  // Create log sheet if it doesn't exist
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(CONFIG.LOG_SHEET);
    
    if (!sheet) {
      sheet = spreadsheet.insertSheet(CONFIG.LOG_SHEET);
      // Add headers
      const headers = ["Timestamp", "Chat ID", "Name", "Username", "Event Type", "Subject", "Score", "Total", "Percentage"];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      console.log("✅ Log sheet created with headers");
    } else {
      console.log("✅ Log sheet already exists");
    }
  } catch (error) {
    console.error("❌ Error setting up log sheet:", error);
  }
  
  console.log("✅ Bot setup complete!");
}

// Function to clear all user data (admin use only)
function clearAllUserData() {
  try {
    USER_STATE.deleteAllProperties();
    console.log("✅ All user data cleared");
  } catch (error) {
    console.error("❌ Error clearing user data:", error);
  }
}
