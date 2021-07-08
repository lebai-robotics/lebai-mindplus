//% color="#62d9ab" iconWidth=50 iconHeight=40
declare const Generator: any;

namespace Iobox_Motor {

    //% block="初始化机器人，IP:[IP]" blockType="command"
    //% IP.shadow="string" IP.defl="192.168.3.227"
    export function InitRobot(parameter: any, block: any) {
        let ip = parameter.IP.code;

        Generator.addImport("from lebai import *");
        Generator.addCode(`robotIp = ${ip}`);
        Generator.addCode(`robot = LebaiRobot(robotIp)`);
        // Generator.addCode([`LebaiRobot(${ip})`,Generator.ORDER_UNARY_POSTFIX]);
    }


    //% block="等待同步" blockType="command"
    export function WaitSync(parameter: any, block: any) {
        Generator.addCode(`robot.sync()`);
    }

    //% block="启动" blockType="command"
    export function StartSys(parameter: any, block: any) {
        Generator.addCode(`robot.start_sys()`);
    }

    //% block="停止" blockType="command"
    export function StopSys(parameter: any, block: any) {
        Generator.addCode(`robot.stop_sys()`);
    }

    //% block="急停" blockType="command"
    export function EStop(parameter: any, block: any) {
        Generator.addCode(`robot.estop()`);
    }

    //% block="设置数字输出，Pin:[PIN]，Value:[VALUE]" blockType="command"
    //% PIN.shadow="number"
    //% VALUE.shadow="number"
    export function SetDO(parameter: any, block: any) {
        let pin = parameter.PIN.code;
        let value = parameter.VALUE.code;
        Generator.addCode(`robot.set_do(${pin},${value})`);
    }

    //% block="获取数字输入，Pin:[PIN]" blockType="reporter"
    //% PIN.shadow="number"
    export function GetDI(parameter: any, block: any) {
        let pin = parameter.PIN.code;
        Generator.addCode([`robot.get_di(${pin})`, Generator.ORDER_UNARY_POSTFIX]);
    }

    //% block="设置模拟输出，Pin:[PIN]，Value:[VALUE]" blockType="command"
    //% PIN.shadow="number"
    //% VALUE.shadow="number"
    export function SetAO(parameter: any, block: any) {
        let pin = parameter.PIN.code;
        let value = parameter.VALUE.code;
        Generator.addCode(`robot.set_ao(${pin},${value})`);
    }

    //% block="获取模拟输入，Pin:[PIN]" blockType="reporter"
    //% PIN.shadow="number"
    export function GetAI(parameter: any, block: any) {
        let pin = parameter.PIN.code;
        Generator.addCode([`robot.get_ai(${pin})`, Generator.ORDER_UNARY_POSTFIX]);
    }

    //% block="获取任务信息：Id:[ID]" blockType="reporter"
    //% ID.shadow="number"
    export function GetTask(parameter: any, block: any) {
        let id = parameter.ID.code;
        Generator.addCode([`robot.get_task(${id})`, Generator.ORDER_UNARY_POSTFIX]);
    }

    //% block="获取机器人状态" blockType="reporter"
    export function getRobotMode(parameter: any, block: any) {
        let id = parameter.ID.code;
        Generator.addCode([`robot.get_robot_mode()`, Generator.ORDER_UNARY_POSTFIX]);
    }

    //% block="运行场景，场景Id:[ID]，执行次数:[EXECUTE_COUNT]" blockType="command"
    //% ID.shadow="number"  ID.defl="10006"
    //% EXECUTE_COUNT.shadow="number" EXECUTE_COUNT.defl="1" EXECUTE_COUNT.params.min=0
    export function RunScene(parameter: any, block: any) {
        let id = parameter.ID.code;
        let execute_count = parameter.EXECUTE_COUNT.code;
        Generator.addCode([`robot.run_scene(${id},${execute_count},False)`, Generator.ORDER_UNARY_POSTFIX]);
    }

    //% block="运行场景直到完成，场景Id:[ID]" blockType="command"
    //% ID.shadow="number"  ID.defl="10006"
    export function RunSceneUntialCompleted(parameter: any, block: any) {
        let id = parameter.ID.code;
        Generator.addCode(`scene = LebaiScene(robotIp,${id})`);
        Generator.addCode(`scene.run()`);
        Generator.addCode([`scene.result().id`, Generator.ORDER_UNARY_POSTFIX]);
    }

    //% block="运行预定义场景，场景:[ID]，执行次数:[EXECUTE_COUNT]" blockType="command"
    //% ID.shadow="dropdown"  ID.options="ID" ID.defl="10006"
    //% EXECUTE_COUNT.shadow="number" EXECUTE_COUNT.defl="1" EXECUTE_COUNT.params.min=1
    export function RunPredefineScene(parameter: any, block: any) {
        let id = parameter.ID.code;
        let execute_count = parameter.EXECUTE_COUNT.code;
        Generator.addCode([`robot.run_scene(${id},${execute_count},False)`, Generator.ORDER_UNARY_POSTFIX]);
    }

    //% block="运行预定义场景直到完成，场景:[ID] blockType="command"
    //% ID.shadow="dropdown"  ID.options="ID" ID.defl="10006"
    export function RunPredefineSceneUntialCompleted(parameter: any, block: any) {
        let id = parameter.ID.code;
        Generator.addCode(`scene = LebaiScene(robotIp,${id})`);
        Generator.addCode(`scene.run()`);
        Generator.addCode([`scene.result().id`, Generator.ORDER_UNARY_POSTFIX]);
    }
}