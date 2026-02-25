/* ===================================================================
   理髪社 — i18n (日本語 / English)
   ================================================================ */

(function () {
    'use strict';

    const translations = {
        ja: {
            'nav.philosophy': '理念',
            'nav.services': 'サービス',
            'nav.value': '価値',
            'nav.members': 'メンバー',
            'nav.contact': 'お問い合わせ',
            'hero.title1': '見えない資産を',
            'hero.title2': '可視化する',
            'hero.subtitle': '企業の「見えない資産（インビジブル・アセット）」を<br>実質的な価値として扱い、ブランド価値を増やし続ける仕組みを提供します',
            'hero.cta1': '詳しく見る',
            'hero.cta2': 'お問い合わせ',
            'mission.title': '事業理念',
            'mission.subtitle': '通常の財務会計では捉えきれない価値を、<br>企業の実質的な成長エンジンへ。',
            'mission.lead': '理髪社は、通常の財務会計では捉えきれない<strong>「見えない資産（インビジブル・アセット）」</strong>を、企業の実質的な価値として扱うプロジェクトを展開しています。',
            'mission.tangible.title': '会計上の資産',
            'mission.tangible.item1': '現金',
            'mission.tangible.item2': '流動資産',
            'mission.tangible.item3': '固定資産',
            'mission.tangible.note': '貸借対照表に数字として残る「見える資産」',
            'mission.intangible.title': '理髪社が扱う資産',
            'mission.intangible.item1': 'ブランド価値',
            'mission.intangible.item2': 'ユーザーや世間からの支持（プロップス）',
            'mission.intangible.item3': '信用・評判・熱量',
            'mission.intangible.item4': '顧客との関係性',
            'mission.intangible.note': '会計上は計上されないが、事業の成長に直結する本質的な資産',
            'mission.statement': '理髪社の使命は、この見えない資産を<br>"浮き彫りにし、蓄積し、活用可能な形に変換する"<br>ことにあります。',
            'services.title': 'サービス',
            'services.subtitle': 'ブランド価値を最大化する3つのアプローチ',
            'services.event.title': 'イベント企画・運営',
            'services.event.desc': 'バーバーコミュニティと企業を繋ぐイベントを企画・運営し、生の支持と共感を獲得します。',
            'services.creative.title': 'クリエイティブ制作',
            'services.creative.desc': '写真・動画・ショートクリップなど、広告宣伝に転載可能な高品質な素材を制作します。',
            'services.barber.title': 'バーバー連携',
            'services.barber.desc': 'バーバーコミュニティとの深い関係を活かし、企業が欲しい価値を現場から直接抽出します。',
            'value.title': '提供価値',
            'value.subtitle': '企業の見えない資産を、持続的な成長の原動力へ。',
            'value.v1.title': 'ブランドの無形資産を増やす',
            'value.v1.desc': '業界横断的な認知、感情的な支持、SNS・街頭・店舗での話題化、コミュニティ内での"語られる理由"を獲得します。これは広告費では買いにくい「生の支持」であり、企業のB/Sには載らないが事業成長に効く資産です。',
            'value.v2.title': '投下したキャッシュを"プロップス"へ転換',
            'value.v2.desc': '企業がイベントで負担する費用は、単なる消費ではなく、世間の支持・共感（プロップス）と交換され、そのプロップスを広告素材・ブランド価値として回収できます。重要な原則：イベントを行うことで損失になることは絶対にありません。',
            'value.v3.title': '高品質な「素材」を継続的に提供',
            'value.v3.desc': '理髪社が行うイベントや撮影は、プロップスを視覚的な資産に変換します。写真、動画、イベントの記録、ショートクリップ、広告宣伝に転載可能な構図・スチル。これらは一度作れば長期利用可能な再生産性のある資産です。',
            'value.v4.title': '現場由来のリアルな価値',
            'value.v4.desc': 'バーバーが持つリアリティ、店舗に来る顧客層、現場の熱量。これらは通常の代理店やマーケティング会社には拾いきれません。理髪社は"バーバーコミュニティと企業"の双方を理解しているため、企業が欲しい価値を現場から直接抽出することができます。',
            'cycle.title': '循環サイクル',
            'cycle.subtitle': '価値が生まれ、蓄積し、循環する仕組み',
            'cycle.s1': '現金（流動資産）',
            'cycle.s2': 'イベント・企画',
            'cycle.s3': 'プロップス獲得',
            'cycle.s4': '素材の蓄積',
            'cycle.s5': '2次利用',
            'cycle.s6': 'ブランド価値向上',
            'cycle.desc': '<strong>プロップス → マテリアル → ブランド価値 → 利益</strong>というループが続くため、<br>費用対効果が長期的に効いていきます。',
            'contact.title': 'お問い合わせ',
            'contact.subtitle': '見えない資産の可視化を、はじめましょう。',
            'contact.location.label': '所在地',
            'contact.location.value': '東京都',
            'contact.email.label': 'メール',
            'contact.form.name': 'お名前',
            'contact.form.name_ph': '山田 太郎',
            'contact.form.company': '会社名',
            'contact.form.company_ph': '株式会社○○',
            'contact.form.email': 'メールアドレス',
            'contact.form.message': 'お問い合わせ内容',
            'contact.form.message_ph': 'お気軽にご相談ください',
            'contact.form.submit': '送信する',
            'contact.form.alert': 'お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。',
            'footer.home': 'ホーム',
            'footer.members': 'メンバー',
            'footer.tagline': '見えない資産を可視化する',
            'members.title': 'メンバー',
            'members.subtitle': '理髪社を動かすプロフェッショナルたち',
            'members.back': '← ホームに戻る',
            'member.tanaka.role': '代表 / クリエイティブディレクター',
            'member.tanaka.name': '田中 悠斗',
            'member.tanaka.bio': 'バーバーカルチャーとブランディングの交差点で10年以上のキャリアを持つ。理髪社のビジョンとクリエイティブの方向性を統括。「見えない価値」を形にすることに情熱を注ぐ。',
            'member.sato.role': 'イベントプロデューサー',
            'member.sato.name': '佐藤 蓮',
            'member.sato.bio': '大規模イベントの企画・運営を専門とし、コミュニティと企業を繋ぐ場づくりのプロフェッショナル。参加者の体験価値を最大化する設計に強みを持つ。',
            'member.yamamoto.role': 'フォトグラファー / ビデオグラファー',
            'member.yamamoto.name': '山本 凛',
            'member.yamamoto.bio': '現場の熱量をそのまま映像に封じ込める撮影のスペシャリスト。広告転用可能なハイクオリティ素材の制作を担当。ドキュメンタリータッチの映像に定評がある。',
            'member.suzuki.role': 'バーバーリレーションズ',
            'member.suzuki.name': '鈴木 翔太',
            'member.suzuki.bio': '全国のバーバーコミュニティとの関係構築を担う。自らもバーバーとしての経歴を持ち、現場のリアルを企業にとって活用可能な形で翻訳する橋渡し役。',
            'member.takahashi.role': 'ブランドストラテジスト',
            'member.takahashi.name': '高橋 美咲',
            'member.takahashi.bio': '企業のブランド戦略立案と無形資産の可視化メソッドを設計。マーケティングリサーチとデータ分析を駆使し、プロップスを定量的な価値に変換するフレームワークを構築。',
            'member.ito.role': 'コミュニティマネージャー',
            'member.ito.name': '伊藤 大和',
            'member.ito.bio': 'オンライン・オフラインのコミュニティ運営を統括。イベント後の関係性維持と熱量の持続を設計し、一過性ではない「蓄積される支持」を生み出す仕組みを構築。',
        },
        en: {
            'nav.philosophy': 'Philosophy',
            'nav.services': 'Services',
            'nav.value': 'Value',
            'nav.members': 'Members',
            'nav.contact': 'Contact',
            'hero.title1': 'Visualize',
            'hero.title2': 'Invisible Assets',
            'hero.subtitle': 'We treat "invisible assets" — brand equity, community trust,<br>and reputation — as real value, and build systems that grow them.',
            'hero.cta1': 'Learn More',
            'hero.cta2': 'Contact Us',
            'mission.title': 'Philosophy',
            'mission.subtitle': 'Unlocking value that traditional accounting<br>can never capture.',
            'mission.lead': 'Rihatsusha operates projects that treat <strong>"invisible assets"</strong> — value that cannot be captured by standard financial accounting — as substantive corporate assets.',
            'mission.tangible.title': 'Accounting Assets',
            'mission.tangible.item1': 'Cash',
            'mission.tangible.item2': 'Current Assets',
            'mission.tangible.item3': 'Fixed Assets',
            'mission.tangible.note': '"Visible assets" that remain as numbers on the balance sheet',
            'mission.intangible.title': 'Assets We Handle',
            'mission.intangible.item1': 'Brand Value',
            'mission.intangible.item2': 'Public Support & Props',
            'mission.intangible.item3': 'Trust, Reputation & Passion',
            'mission.intangible.item4': 'Customer Relationships',
            'mission.intangible.note': 'Essential assets that directly drive business growth, yet never appear on financial statements',
            'mission.statement': 'Our mission is to uncover, accumulate,<br>and transform these invisible assets<br>into actionable value.',
            'services.title': 'Services',
            'services.subtitle': 'Three approaches to maximize brand value',
            'services.event.title': 'Event Planning',
            'services.event.desc': 'We plan and produce events that connect barber communities with businesses, earning authentic support and empathy.',
            'services.creative.title': 'Creative Production',
            'services.creative.desc': 'We produce high-quality photos, videos, and short clips that can be repurposed for advertising and promotion.',
            'services.barber.title': 'Barber Partnerships',
            'services.barber.desc': 'Leveraging deep relationships within barber communities, we extract the value businesses need directly from the field.',
            'value.title': 'Value Proposition',
            'value.subtitle': 'Turning invisible assets into sustainable growth engines.',
            'value.v1.title': 'Grow Intangible Brand Assets',
            'value.v1.desc': 'Earn cross-industry recognition, emotional support, social buzz, and authentic word-of-mouth. This "organic endorsement" is nearly impossible to buy with ad spend — yet it directly fuels business growth.',
            'value.v2.title': 'Convert Cash into "Props"',
            'value.v2.desc': 'Event investments are not expenses — they are exchanged for public support and empathy (props), which can be recovered as advertising materials and brand value. Key principle: events never result in a net loss.',
            'value.v3.title': 'Continuous High-Quality Material',
            'value.v3.desc': 'Our events and productions convert props into visual assets: photos, videos, event archives, and ad-ready stills. Once created, these assets can be leveraged repeatedly over the long term.',
            'value.v4.title': 'Field-Sourced Authentic Value',
            'value.v4.desc': 'The authenticity of barbers, the customer base walking into shops, the passion on the ground — traditional agencies cannot capture this. We bridge barber communities and enterprises to extract value directly from the field.',
            'cycle.title': 'Business Cycle',
            'cycle.subtitle': 'A self-reinforcing loop of value creation',
            'cycle.s1': 'Cash (Current Assets)',
            'cycle.s2': 'Events & Planning',
            'cycle.s3': 'Props Acquisition',
            'cycle.s4': 'Material Accumulation',
            'cycle.s5': 'Secondary Usage',
            'cycle.s6': 'Brand Value Growth',
            'cycle.desc': 'The loop of <strong>Props → Material → Brand Value → Profit</strong><br>keeps compounding, delivering long-term ROI.',
            'contact.title': 'Contact',
            'contact.subtitle': "Let's start visualizing your invisible assets.",
            'contact.location.label': 'Location',
            'contact.location.value': 'Tokyo, Japan',
            'contact.email.label': 'Email',
            'contact.form.name': 'Name',
            'contact.form.name_ph': 'Taro Yamada',
            'contact.form.company': 'Company',
            'contact.form.company_ph': 'Company Inc.',
            'contact.form.email': 'Email Address',
            'contact.form.message': 'Message',
            'contact.form.message_ph': 'Feel free to reach out',
            'contact.form.submit': 'Send Message',
            'contact.form.alert': 'Thank you for your inquiry. We will get back to you shortly.',
            'footer.home': 'Home',
            'footer.members': 'Members',
            'footer.tagline': 'Visualize Invisible Assets',
            'members.title': 'Members',
            'members.subtitle': 'The professionals behind Rihatsusha',
            'members.back': '← Back to Home',
            'member.tanaka.role': 'Founder / Creative Director',
            'member.tanaka.name': 'Yuto Tanaka',
            'member.tanaka.bio': 'Over 10 years at the intersection of barber culture and branding. Oversees the vision and creative direction of Rihatsusha. Passionate about giving shape to "invisible value."',
            'member.sato.role': 'Event Producer',
            'member.sato.name': 'Ren Sato',
            'member.sato.bio': 'Specialist in planning and producing large-scale events. A professional at creating spaces that connect communities with businesses, with a strength in maximizing attendee experience value.',
            'member.yamamoto.role': 'Photographer / Videographer',
            'member.yamamoto.name': 'Rin Yamamoto',
            'member.yamamoto.bio': 'A specialist in capturing the raw energy of the field into visual media. Produces high-quality materials ready for advertising. Known for a distinctive documentary-style approach.',
            'member.suzuki.role': 'Barber Relations',
            'member.suzuki.name': 'Shota Suzuki',
            'member.suzuki.bio': 'Manages relationships with barber communities nationwide. With a background as a barber himself, he bridges the gap between on-the-ground reality and corporate applications.',
            'member.takahashi.role': 'Brand Strategist',
            'member.takahashi.name': 'Misaki Takahashi',
            'member.takahashi.bio': 'Designs brand strategies and intangible asset visualization methodologies. Leverages marketing research and data analysis to build frameworks that convert props into quantifiable value.',
            'member.ito.role': 'Community Manager',
            'member.ito.name': 'Yamato Ito',
            'member.ito.bio': 'Oversees online and offline community operations. Designs post-event relationship maintenance and sustaining engagement, building systems that generate "accumulated support" rather than one-off impressions.',
        }
    };

    let currentLang = localStorage.getItem('rihatsusha-lang') || 'ja';

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('rihatsusha-lang', lang);
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = translations[lang]?.[key];
            if (text) el.innerHTML = text;
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const text = translations[lang]?.[key];
            if (text) el.placeholder = text;
        });

        document.querySelectorAll('.lang-label').forEach(label => {
            label.classList.toggle('active', label.dataset.lang !== lang);
        });

        const switchBtn = document.getElementById('langSwitch');
        if (switchBtn) {
            switchBtn.setAttribute('aria-label', lang === 'ja' ? 'Switch to English' : '日本語に切替');
        }
    }

    function toggleLanguage() {
        applyLanguage(currentLang === 'ja' ? 'en' : 'ja');
    }

    window.rihatsusha = { applyLanguage, toggleLanguage, translations, getCurrentLang: () => currentLang };

    document.addEventListener('DOMContentLoaded', () => {
        const switchBtn = document.getElementById('langSwitch');
        if (switchBtn) {
            switchBtn.addEventListener('click', toggleLanguage);
        }
        applyLanguage(currentLang);
    });
})();
