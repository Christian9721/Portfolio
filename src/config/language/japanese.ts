import { NEXTIA, CENTRO_SALUD, M6CONNECT, MATTE, UJED, VENN, Projects as ProjectsBase } from "@/constants/experience";
import type { ILanguage } from '../../interfaces/languages.interface';
import type { IProjectCard } from "@/interfaces/project.interface";
import { projectPersonalBase } from '@/constants/projects';
import { createGradientElement } from "@/lib/utils/createElement";

export const Projects : { [Key: string]: IProjectCard } = {
  currie: {
    ...ProjectsBase.currie,
    description: "これは、主要なグローバル企業であり、コスト管理、プロジェクト管理、アドバイザリーサービスの一流プロバイダーであり、公共および私的セクター全体にわたるサービスを提供しています。これは非常に大規模なプロジェクトです。",
    technicalDescription: `主な課題は、プロジェクト全体の計画を作成できるアプリケーションを作成することでした。プロジェクトは病院、道路、サッカースタジアムなど、基本的にあらゆる種類の建設物である可能性があります。また、計画の作成は1年間にわたって管理される必要があります。そのため、主な課題は高度な抽象化レベルでの設計でした。次に、最適化があります。アプリケーションは、プロジェクトごとに数千のデータをサポートできる能力を持っています。最後に、システムのモジュール間の相互運用性と、計画を作成するための異なる組み合わせがあります。`,
  },
  accesos: {
    ...ProjectsBase.accesos,
    description: "これは、上院が所有している古いアクセス制御システムを置き換えるプロジェクトです。以前は、来訪者の情報をExcelシートに手動で記録し、IDの画像をスタッフ間で送信していました。現在は、警備員が迅速に来訪者のデータをキャプチャし、役割で分類し、訪問時間や駐車場などを追加できるようになりました。また、来訪者の滞在時間が終了間近になると、リアルタイムで通知を送信することも可能です。",
    technicalDescription: `このプロジェクトは、ReactとTypescriptを使用して作成され、API RestとWebsocketsサービスを消費しました。ユニットテストと統合テストには、CypressとJestが使用されました。`,
  },
  venn: {
    ...ProjectsBase.venn,
    description: `このオンライン学習プラットフォームは、「e-learningのスイスアーミーナイフ」と定義されており、ユーザーがライブセッション、事前に録画されたコース、1対1のメンタリングを受けることができます。`,
    technicalDescription: `このコースプラットフォームはReactとモジュールで作成され、ベースはWordpressで作成されました。そのため、webpackを使用してコンポーネントモジュールを別々に作成し、サーバーにアップロードしました。私の役割は、モックアップに従って追加のモジュールを開発し、ユーザーエクスペリエンス（UX）の向上のためにUIデザインを修正することでした。既存のモジュールのメンテナンスを行い、レガシーコードのバグを修正しました。PHPサーバー上でWebstormを使用して本番環境に展開しました。`,
  },
  nissan: {
    ...ProjectsBase.nissan,
    description: `このNissanのクライアント向けのプロジェクトは、最新モデルのNissan Frontierのすべての新機能を視覚化するための拡張現実（AR）アプリケーションで構成されています。このアプリケーションは、スペイン語とポルトガル語をサポートしています。`,
    technicalDescription: `主な課題は、アーキテクチャの設計とアニメーションのコード制御のためのライブラリの使用、および新しいシリアル化ライブラリの統合でした。`,
  },
  cele: {
    ...ProjectsBase.cele,
    description: `Durango State Language School University (CELE)の言語学校は、学生がコースに登録し、銀行やOXXOなどの機関を通じて支払いを行うことができる現代的なウェブサイトが必要でした。また、学生ごとに成績をより良く管理するためのダッシュボードも備えています。`,
  },
  farmacia: {
    ...ProjectsBase.farmacia,
    description: `このプロジェクトは、薬局のための薬剤管理システムと、薬局の在庫をよりよく管理するための在庫管理で構成されていた。`,
  },
  dental: {
    ...ProjectsBase.dental,
    description: `このプロジェクトは、デンシタ部門向けの在庫管理システムで、サプライヤーを管理することで在庫と製品コストをよりよく管理することを支援するものだった。`
  }
}

export const projectCompanyCards: IProjectCard[] = [
  Projects.currie,
  Projects.accesos,
  Projects.venn,
  Projects.nissan,
  Projects.cele,
  Projects.farmacia,
  Projects.dental,
];

export const projectPersonal: IProjectCard[] = [
  {
    ...projectPersonalBase.dotchain,
    description: `仮想通貨の時代とフィーバーの頃に、ノードによる計算システムを作成しました。これは、あなたのBinanceアカウントに接続して、アカウント内の利用可能な仮想通貨にアクセスし、それらをノードとしてインポートし、ビットコインの価格やさまざまな特性の現在値を自動的に追加、減算、乗算などする数学的ノードと変換を作成します。`,
    technicalDescription: `このようなプロジェクトの主な課題は、最適化を考えることです。再描画をできるだけ少なくすることです。そのために、結果をメモリに記憶して再計算を避けたり、デバウンスの使用など、さまざまな技術を使用しました。また、当時のBinance APIの使用はやや複雑でした。開発者のフォーラムでも多くの疑問がありました。`,
  },
  {
    ...projectPersonalBase.petfinder,
    description: `このプロジェクトは、Android開発のインターンシップであり、ユーザーが自分のペットについて投稿し、他の人が失われたペットをより簡単に見つけるのを手助けすることを目的としています。`,
    technicalDescription: `開発にはFlutterとDartを使用し、アプリケーションをカスタマイズするために異なるテーマを作成しました。`,
  },
  {
    ...projectPersonalBase.amongspikes,
    description: `単純ですが楽しいゲームです。球体に立方体が現れ、これらの立方体が棘に衝突して跳ね返ります。目標は、モバイルのタッチを使って立方体を消すことです。ジャイロスコープも使用されています。`,
    technicalDescription: `その当時の課題は、画面上の敵の時間を計算するアルゴリズムを作成することであり、また、敵の数に応じて色を赤に変更する価値を計算することでした。`,
  },
  {
    ...projectPersonalBase.lixenium,
    description: `プレイヤーが自分の音楽を使用して大きなリアルタイムイコライザーでプレイし、異なるオブジェクトを避けながら成長し、他のプレイヤーから養分を吸収することができるマルチプレイヤービデオゲームです。Geometry Dash、Agar.io、Osu!などの人気のあるビデオゲームにインスパイアされています。`,
    technicalDescription: `これは私の最初のビデオゲームであり、プログラミングの世界に近づけるものでした。一緒に学びながら作業するのが大きな挑戦でした。また、Unity Unetを使用してプロジェクトのベースをマルチプレイヤービデオゲームに変換するために状態を同期することでした。後に、UnityがUnetのサポート終了を発表したため、Mirrorという代替手段が生まれ、コードの移行が始まりました。`,
  },
];

export const Japanese: ILanguage = {
  catTag: "Quantum computing student!",  
  meta: {
      title: 'Christian Antonio Avila CV 🇯🇵',
      image: 'jpico.webp',
      description: `私は, 美しいユーザーフレンドリーなインターフェース（UI / UX）を作成することを重視したデジタルエクスペリエンスクリエーターです。私の専門知識は、堅牢でSEOに優しいアーキテクチャのためのデザインパターンとクリーンなコードの記述にまで及びます。あなたのビジョンを次のレベルに引き上げ、本当に特別なものを作りましょう。`
    }, 
  pronoum: "私は,です",
  field: "ソフトウェアエンジニア",
    description: `私は, 美しく、ユーザーフレンドリーなインターフェース<strong>（UI/UX）</strong>を作成することに焦点を当てた、<strong>4年以上の経験</strong>を持つ<strong>プログラミングの専門家</strong>です。私の専門知識は、<strong>デザインパターン</strong>や<strong>ロバストでSEOフレンドリー</strong>なアーキテクチャのための<strong>クリーンコード</strong>の執筆まで広がっています。<br>${createGradientElement({text: "あなたのビジョンを次のレベルに引き上げて、本当に特別なものを作りましょう"})}`,
    mainButtons: {
        cv: "履歴書ダウンロード",
        about: "私について",
    },
    experience: {
        title: "職務経験",
        achievementsText: "業績",
        knowledgeText: "私が学んだことは？",
        data: [
            {
                ...M6CONNECT,
                title: "UI/UXデベロッパー",
                timePeriod: "2023年11月～現在",
                location: "米国ネブラスカ州オマハ",
                description: `私はアメリカ、オマハのソフトウェア会社の製品作成において重要な役割を果たし、革新的なプロセスで組織の効率を向上させ、IT、施設、サプライチェーンの解決策を見出しました。また、(SaaS) アプリケーションのウィジェットの作成と正規表現 (REGEX) を用いたプロセスの自動化にも貢献しました。`,
                achievements: [
                    {
                      title: `製品開発`,
                      description: `私はオマハの会社で、プロジェクト目標を達成するためにReactを活用することに焦点を当てて、さまざまな製品の開発を主導し、貢献しました。`,
                    },
                    {
                      title: `タスク・オートメーション`,
                      description: `アプリ管理システム内のタスクを自動化するために正規表現を使用したコマンドを開発し、日々の業務を効率化し、全体の効率を向上させました。`,
                    },
                    {
                      title: `UIの改善`,
                      description: `ユーザーエクスペリエンスのベストプラクティスに従い、SassとUIライブラリを使用して、ユーザーのインタラクションと満足度を向上させるために、UIデザインを修正しました。`,
                    },
                    {
                      title: `ウィジェットの開発`,
                      description: `SaaSプラットフォーム向けのウィジェットが開発されました。`,
                    },
                  ],
            },
            {
                ...NEXTIA,
                description: `私は、このデジタルトランスフォーメーションコンサルタンシーで、独自のソフトウェア開発ファクトリーで、最先端の技術を使用してSCRUM方法論（アジャイル方法論）の下で働いていました。`,
                title: 'フロントエンド開発者／APIマネージャ',
                timePeriod: '2022年6月 – 2023年8月',
                location: "CD.MX, メキシコ",
                achievements: [
                    {
                      title: "成功したグローバル展開",
                      description: `私はキュリー＆ブラウンのプロジェクトを主導し、成功させました。国際プロジェクトに進出するための`,
                    },
                    {
                      title: "政府への影響",
                      description: `私たちはメキシコ上院のために堅牢かつ現代的なアクセス制御システムを開発しました。これにより、警備員は従業員の訪問や入場を管理することができます。技術的な詳細には、React、TypeScript、およびNode.jsを使用し、ウェブソケットで通知を行う認証システム、レコードを持つテーブルなどが含まれています。`,
                    },
                    {
                      title: "技術の拡張",
                      description: `当社では、API開発のためにJavaを使用したMQ-IBMという技術を採用して、新しい開発チームを立ち上げました。`,
                    },
                    {
                      title: "品質保証",
                      description: `私は、JestとCypressを使用して厳密なテスト手順を実装し、アプリケーションの安定性を維持し、リリース後の欠陥を削減しました。テストカバレッジは85％でした。<chart data={[80,20]} type="donut" width="auto" text="none" substring="カバレッジ"/>`,
                      isDefaultOpen: true,
                    },
                    {
                      title: "最適化",
                      description: `システムの効率とパフォーマンスを継続的に改善し、プロセスを効率化して効果的な結果を達成しました。コンポーネントの読み込み時間を最大70％まで最適化しました。`,
                    },
                  ],
                  projects: [Projects.currie, Projects.accesos]
            },
            {
                ...VENN,
                title: 'フロントエンド開発者',
                timePeriod: '2020年8月 – 2022年5月',
                location: "CD.MX, メキシコ",
                description: `私は、React、Redux、Context、Axiosなどの高度な技術を使用し、MaterialUIなどのモダンなUIライブラリを活用して、このe-learningプロバイダーのスタートアッププラットフォームの複数のモジュールをリデザインしました。`,
                achievements: [
                    {
                      title: "モジュールの再設計",
                      description: `私は、React、Redux、JavaScriptを使用して、オンラインコースプラットフォームの複数のモジュールの再設計と再開発をリードし、全体的なユーザーエクスペリエンスを向上させました。`,
                    },
                    {
                      title: "新規クライアント",
                      description: `「Brigada de Rescate Topos de Tlaltelolco A.C.」との提携を確立し、プラットフォーム上でのコース提供を開始しました。その後、このプラットフォームが美しいと感じるユーザーが大幅に増加した。<chart data={[70,30]} type="line" width="100%" text="none" substring="新規のお客様"/>`,
                      isDefaultOpen: true,
                    },
                    {
                      title: "UX/UIの改善",
                      description: `ユーザーエクスペリエンスの向上に焦点を当て、様々なインターフェースのデザインを細心の注意を払って改善しました。Sassを使用してユニークでレスポンシブなクリエイティブなデザインを実装し、GSAPを使用してアニメーションを追加し、Chart.JSを使用してグラデーショングラフィックを作成しました。`,
                    },
                    {
                      title: "バグの検出",
                      description: `私は、コードベースの品質と信頼性を維持するためにユニットテストを実施し、レガシーコードでのエラーの検出と修正を行いました。`,
                    },
                    {
                      title: "TypeScriptの統合",
                      description: `コンポーネントをTypeScriptに正常に移行し、コードの堅牢性と保守性を確保しました。`,
                    },
                  ],
                  projects: [Projects.venn]
            },
            {
                ...MATTE,
                title: 'ビデオゲーム開発者',
                timePeriod: '2020年3月 – 2020年4月',
                location: "CD.MX, メキシコ",
                description: `私は、NISSANの最新車種であるNISSAN Frontier 2020のための拡張現実（AR）アプリケーションの一部をUnityとC＃を使用してリファクタリングする取り組みをリードしました。`,
                achievements: [
                    {
                      title: `機能開発`,
                      description: `新機能のプログラミングを行いました。これには、マルチ言語サポートや高度な運動学などが含まれ、ARアプリケーションの機能が向上しました。`,
                    },
                    {
                      title: `オブジェクト指向プログラミング`,
                      description: `私は、高度なオブジェクト指向プログラミングの原則を適用して、清潔で保守可能、効率的なコードを設計および開発し、ソフトウェアの長寿命を確保しました。`,
                    },
                  ],
                  projects: [Projects.nissan]
            },
            {
                ...UJED,
                title: 'フロントエンド開発者',
                timePeriod: '2019年5月 – 2020年3月',
                location: "Durango, メキシコ",
                description: `Durango State Language School University (CELE)のウェブサイトをReact、Tailwind、およびSassを使用して開発しました。このプロジェクトでは、完全なユーザー管理システムを実装し、ユーザーがさまざまなコースに登録できるようにしました。私はSCRUM方法論（アジャイル方法論）に従い、開発プロセスを最適化するためにWebpackを活用しました。`,
                achievements: [
                    {
                      title: `ウェブサイトの開発`,
                      description: `CELEウェブサイトの開発をリードし、視覚的に魅力的でレスポンシブなプラットフォームを作成しました。最初の2週間で1000人の学生が正常に登録されました。`,
                    },
                    {
                      title: `ユーザー管理システム`,
                      description: `堅牢なユーザー管理システムを設計し、実装しました。これにより、ユーザーはさまざまなコースに簡単に登録できるようになりました。`,
                    },
                    {
                      title: `API 統合`,
                      description: `ユーザーの支払いを円滑に行うために API を統合し、コースの登録を支援し、ユーザーエクスペリエンスを向上させました。`,
                    },
                  ],
                  projects: [Projects.cele]
            },
            {
                ...CENTRO_SALUD,
                title: 'ソフトウェア開発者',
                timePeriod: '2018年1月 – 2018年5月',
                location: "Durango, メキシコ",
                description: `私は、在庫管理や患者登録システム、医薬品登録システム、および病院環境向けの在庫システムなど、包括的な医療ソフトウェアソリューションの開発を主導しました。`,
                achievements: [
                    {
                      title: `ソフトウェア開発`,
                      description: `MySQL、C＃、およびWPFを使用して、患者登録、在庫管理、医薬品管理などの正確で信頼性の高いシステムを提供することに焦点を当て、医療ソフトウェアソリューションのスイートの開発をリードしました。`,
                    },
                    {
                      title: `MySQL 統合`,
                      description: `重要なデータを保存し、管理するために MySQL データベースを効果的に統合し、データの正確性とアクセシビリティを確保しました。`,
                    },
                    {
                      title: `品質保証`,
                      description: `ソフトウェアの機能と信頼性を検証するために徹底的なテスト手順を実装し、高い品質基準を維持しました。`,
                    },
                ],
                projects: [Projects.farmacia, Projects.dental]
            }
        ]

    },
    projects: {
        title: "プロジェクト",
        tabs: [
            "クライアント", "個人"
        ]
    }
}
